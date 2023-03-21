import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Divider,
  ListItemButton,
} from "@mui/material";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@mui/material';


export default function ContactsList(props) {
  let [contacts, setContacts] = useState([]);
  const [contactID, setContactID] = useState(0)
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [editDialogState, setEditDialogState] = useState(false)

  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)


  const addingIsDisabled = (firstNameError && lastNameError && phoneNumberError && emailError && addressError)

  console.debug(firstNameError, lastNameError, phoneNumberError, emailError, addressError)
  console.debug(addingIsDisabled)

  /**
   * if have extra time, make sure to check for unique emails
   */

  const handleButtonDisabledStatus = () => {
    if (firstName === "" || lastName === "" || phoneNumber === "" || email === "" || address === "") {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }


  const deleteContact = (contactID) => {
    const updatedContacts = contacts.filter(contact => contact.contactID !== contactID);
    console.debug("updatedContacts: ", updatedContacts)
    setContacts(updatedContacts)
  };

  const addContact = (firstName, lastName, phoneNumber, email, address) => {
    let newContact = { contactID: contactID, firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, address: address }

    const updatedContacts = [...contacts, newContact]
    setContacts(updatedContacts)

    setContactID(contactID + 1)
    handleCloseAddContactDialog()
  }

  const updateContact = (contactID) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].contactID === contactID) {
        contacts[i].firstName = firstName
        contacts[i].lastName = lastName
        contacts[i].phoneNumber = phoneNumber
        contacts[i].email = email
        contacts[i].address = address
      }
    }
    handleCloseEditContactDialog()
  }


  /* handlers */

  const handleAddContactClick = () => {
    setOpen(true);
  }

  const handleEditOpen = () => {
    setEditDialogState(true);
    console.debug("handleEditOpen", editDialogState)
  }

  const handleEditClose = () => {
    setEditDialogState(false);
  }

  const handleCloseEditContactDialog = () => {
    setEditDialogState(false);
  };

  const handleFirstName = (e) => {
    let pattern = /^[a-zA-Z]+$/
    let result = e.target.value.trim().match(pattern)
    if (firstName.trim() !== "" && result !== null) {
      setFirstNameError(false)
    } else {
      setFirstNameError(true)
    }
    handleButtonDisabledStatus()
    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    let pattern = /^[a-zA-Z]+$/
    let result = e.target.value.trim().match(pattern)
    if (lastName.trim() !== "" && result !== null) {
      setLastNameError(false)
    } else {
      setLastNameError(true)
    }
    handleButtonDisabledStatus()
    setLastName(e.target.value)
  };

  const handlePhoneNumber = (e) => {
    let pattern = /^\d{10}$/
    let result = e.target.value.trim().match(pattern);
    if (phoneNumber.trim() !== "" && result !== null) {
      setPhoneNumberError(false)
    } else {
      setPhoneNumberError(true)
    }
    handleButtonDisabledStatus()
    setPhoneNumber(e.target.value)
  };

  const handleEmail = (e) => {
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let result = e.target.value.trim().match(pattern);

    if (email.trim() !== "" && result !== null) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    handleButtonDisabledStatus()
    setEmail(e.target.value)
  };

  const handleAddress = (e) => {
    if (address.trim() !== "") {
      setAddressError(false)
    } else {
      setAddressError(true)
    }
    handleButtonDisabledStatus()
    setAddress(e.target.value)
  };

  const handleCloseAddContactDialog = () => {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setEmail("")
    setAddress("")

    setOpen(false);
  };

  const handleFirstNameHelperText = () => {
    if (firstNameError) {
      return "Empty field or invalid first name (Alpha-only characters allowed). Please try again."
    } else {
      return ""
    }
  }

  const handleLastNameHelperText = () => {
    if (lastNameError) {
      return "Empty field or invalid last name (Alpha-only characters allowed). Please try again."
    } else {
      return ""
    }
  }

  const handlePhoneNumberHelperText = () => {
    if (phoneNumberError) {
      return "Empty field or invalid phone number format (only numbers allowed, must have 10 digits). Please try again."
    } else {
      return ""
    }
  }

  const handleEmailHelperText = () => {
    if (emailError) {
      return "Empty field or invalid email. Please try again."
    } else {
      return ""
    }
  }

  const handleAddressHelperText = () => {
    if (addressError) {
      return "Empty field. Please try again."
    } else {
      return ""
    }
  }


  return (
    <div>
      <div style={{ paddingBottom: "40px" }}>
        <h2 style={{ textAlign: "center" }}>My Contacts</h2>
        <Button onClick={handleAddContactClick} style={{ marginLeft: "auto" }} variant="outlined" size="small">
          Add Contact
        </Button>

        <Dialog open={open} onClose={handleCloseAddContactDialog}>
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
              value={firstName}
              onChange={handleFirstName}
              helperText={handleFirstNameHelperText()}
              error={firstNameError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              value={lastName}
              onChange={handleLastName}
              helperText={handleLastNameHelperText()}
              error={lastNameError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Phone Number"
              type="text"
              fullWidth
              variant="standard"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              helperText={handlePhoneNumberHelperText()}
              error={phoneNumberError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={handleEmail}
              helperText={handleEmailHelperText()}
              error={emailError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              value={address}
              onChange={handleAddress}
              helperText={handleAddressHelperText()}
              error={addressError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddContactDialog}>Cancel</Button>
            <Button disabled={isDisabled} onClick={() => addContact(firstName, lastName, phoneNumber, email, address)}>Add Contact</Button>
          </DialogActions>
        </Dialog>
      </div>

      <List>
        {contacts.map((contact, index) => (
          <Container key={index} maxWidth="sm">
            <Box>
              <ListItem alignItems="flex-start">

                <Container>
                  <ListItemText primary={"Name"} secondary={[contact.firstName, " ", contact.lastName]} />
                  <ListItemText primary={"Phone Number"} secondary={contact.phoneNumber} />
                  <ListItemText primary={"Email"} secondary={contact.email} />
                  <ListItemText primary={"Address"} secondary={contact.address} />
                </Container>

                <div>
                  <ListItemButton onClick={handleEditOpen}>
                    <EditIcon />
                  </ListItemButton>

                  <Dialog open={editDialogState} onClose={handleEditClose}>
                    <DialogTitle>Edit Contact</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="firstName2"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleFirstName}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="lastName2"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleLastName}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="phoneNumber2"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handlePhoneNumber}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="email2"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleEmail}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="addess2"
                        label="Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleAddress}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEditContactDialog}>Cancel</Button>
                      <Button onClick={() => updateContact(contact.contactID)}>Save Edits</Button>
                    </DialogActions>
                  </Dialog>

                  <ListItemButton
                    onClick={() => deleteContact(contact.contactID)}
                  >
                    <DeleteOutlineIcon />
                  </ListItemButton>
                </div>
              </ListItem>
              <Divider />
            </Box>
          </Container>
        ))}
      </List>
    </div>
  );
}
