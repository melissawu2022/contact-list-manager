import React from 'react'
import Button from "@mui/material/Button";
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@mui/material';


const CustomTextField = (props) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.id}
      label={props.label}
      type={props.inputType}
      fullWidth
      variant="standard"
      onChange={props.changeHandler}
    />
  )
}

export default function EditContactDialog(props) {
  return (
    <div>
      <Dialog open={props.editDialogState} onClose={props.handleEditClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <CustomTextField id={"firstName2"} label={"First Name"} type={"text"} changeHandler={props.handleFirstName} />
          <CustomTextField id={"lastName2"} label={"Last Name"} type={"text"} changeHandler={props.handleLirstName} />
          <CustomTextField id={"phoneNumber2"} label={"Phone Number"} type={"text"} changeHandler={props.handlePhoneNumber} />
          <CustomTextField id={"email2"} label={"Email"} type={"email"} changeHandler={props.handleEmail} />
          <CustomTextField id={"address2"} label={"Address"} type={"text"} changeHandler={props.handleAddress} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseEditContactDialog}>Cancel</Button>
          <Button onClick={() => props.updateContact(props.contact.contactID)}>Save Edits</Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}
