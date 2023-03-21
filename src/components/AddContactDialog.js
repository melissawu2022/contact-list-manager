import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@mui/material';
import Button from "@mui/material/Button";

export default function AddContactDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.handleCloseAddContactDialog}>
      <DialogTitle>Add New Contact</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
          value={props.firstName}
          onChange={props.handleFirstName}
          helperText={props.handleFirstNameHelperText}
          error={props.firstNameError}
        />
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
          value={props.lastName}
          onChange={props.handleLastName}
          helperText={props.handleLastNameHelperText}
          error={props.lastNameError}
        />
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Phone Number"
          type="text"
          fullWidth
          variant="standard"
          value={props.phoneNumber}
          onChange={props.handlePhoneNumber}
          helperText={props.handlePhoneNumberHelperText()}
          error={props.phoneNumberError}
        />
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={props.email}
          onChange={props.handleEmail}
          helperText={props.handleEmailHelperText()}
          error={props.emailError}
        />
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Address"
          type="text"
          fullWidth
          variant="standard"
          value={props.address}
          onChange={props.handleAddress}
          helperText={props.handleAddressHelperText()}
          error={props.addressError}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseAddContactDialog}>Cancel</Button>
        <Button disabled={props.isDisabled} onClick={() => props.addContact(props.firstName, props.lastName, props.phoneNumber, props.email, props.address)}>Add Contact</Button>
      </DialogActions>
    </Dialog>
  )
}
