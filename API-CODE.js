const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//database
let patients = new Object();
patients["112233445"] = ["Arthur", "Numbers", "123-1234-1234"]
patients["112233446"] = ["Big", "Boy", "122-1234-1234"]
patients["112232446"] = ["Kevin", "Flower", "622-1234-1234"]
patients["112733446"] = ["Orange", "Luo", "122-1234-8234"]
patients["112233846"] = ["Timmy", "Johnson", "122-1232-1234"]

let records = new Object();
records["112233445"] = "Status: Wealthy"
records["112233446"] = "Status: In Debt"
records["112232446"] = "Status: Disappointment"
records["112733446"] = "Status: Freeloader"
records["112233846"] = "Status: Jobless"

// Get patient medical records
app.get("/records", (req, res) => {
    
    // Verify Patient Exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }
    
    // Verify SSN matches First and last Name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        if (req.body.reasonforvisit === "medicalrecords") {
            // return medical records
            res.status(200).send(records[req.headers.ssn]);
            return;
        }
        else {
            // return error
            res.status(501).send({"msg":"Unable to complete request at this time: " + req.body.reasonforvisit})
            return;
        }
    }
    else {
        res.status(401).send({"msg":"First or Last didn't match SSN."})
        return;
    }

    // Return Appropriate Record
    res.status(200).send({"msg": "HTTP GET - SUCCESS!"});
});

// Create a new patient
app.post("/", (req, res) => {
    
    // Create patient in database
    patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.headers.phone]
    res.status(200).send(patients)
});                                                                                                                                                                                                         

// Update existing patient phone number
app.put("/", (req, res) => {
    
    // Verify Patient Exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Update the phone number and return the patient info
        patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.body.phone];
        res.status(202).send(patients[req.headers.ssn]);
        return;
    }
    else {
        res.status(401).send({"msg":"First or Last didn't match SSN. (Trying to update Ph #)"})
        return;
    }

});

// Delete patient records
app.delete("/", (req, res) => {

    // Verify Patient Exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }
    
    // Verify SSN matches First and last Name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Delete patient and medical records from database

        delete patients[req.headers.ssn]
        delete records[req.headers.ssn]
        
        res.status(200).send({"msg": "Successfully deleted."});
        return;
    }
    else {
        res.status(401).send({"msg":"First or Last didn't match SSN. (Trying to delete)"})
        return;
    }

});

app.listen(3000);