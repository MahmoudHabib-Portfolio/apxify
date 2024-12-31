import { Button, TextField, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";

/* Name_Field */
const NameField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A9A9A9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "8px"
      },
      '&:hover fieldset': {
        borderColor: '#A9A9A9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A9A9A9',
        borderWidth: '0rem'
      }
    },
  });

  /* Email_Field */
const EmailField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A9A9A9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "8px"
      },
      '&:hover fieldset': {
        borderColor: '#A9A9A9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A9A9A9',
        borderWidth: '0rem'
      }
    },
  });

  /* CompanyNameField */
const CompanyNameField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A9A9A9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "8px"
      },
      '&:hover fieldset': {
        borderColor: '#A9A9A9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A9A9A9',
        borderWidth: '0rem'
      }
    },
  });

  /* ContactField */
const ContactField = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A9A9A9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "8px"
      },
      '&:hover fieldset': {
        borderColor: '#A9A9A9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A9A9A9',
        borderWidth: '0rem'
      }
    },
  });

  /* TextArea */
const Textarea = styled(TextareaAutosize)(
    () => `
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    color: #A9A9A9;
    background: #000;
    
    &::placeholder {
      opacity: 1;
      color: #A9A9A9; // Adjust the color if needed
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

const Contact = () => {
  
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [compName, setCompName] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");

    const ContactSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="px-20 bg-black pb-8 w-full md:px-4">
        <motion.div className="flex flex-col bg-boxingbg py-2 px-12 w-full md:px-4"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, margin: "-50px"}}
        transition={{ duration: 1, delay: 0.6 }}>
        <div className="font-clashBold text-white text-3xl py-8 tracking-widest w-full md:text-xl">
            Contact Us
        </div>
        <div className="w-full">
            <form onSubmit={ContactSubmit}>
                <div className="flex flex-col gap-y-6 w-full">
                    <div className="flex flex-row justify-between gap-x-6">
                        <div className="w-full">
                            {/* Name_Field */}
                            <NameField 
                                fullWidth
                                value={name}
                                sx={{
                                    "& .MuiOutlinedInput-root":{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderWidth: "0rem",
                                        borderStyle: "solid",
                                        borderColor: '#A9A9A9',
                                        borderRadius: "8px"
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: "#fff"
                                    },
                                    }
                                }}
                                inputProps={{
                                    sx: {
                                    color: '#A9A9A9',
                                    fontSize: '16px',
                                    backgroundColor:'#000',
                                    padding:'11px 12px',
                                    borderRadius: "8px",
                                    "&::placeholder":{
                                        opacity: 1
                                        }
                                    },
                                    }}
                                    placeholder={"Name"}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    />
                        </div>
                        <div className="w-full">
                            {/* Email */}
                            <EmailField 
                                fullWidth
                                value={email}
                                sx={{
                                    "& .MuiOutlinedInput-root":{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderWidth: "0rem",
                                        borderStyle: "solid",
                                        borderColor: '#A9A9A9',
                                        borderRadius: "8px"
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: "#fff"
                                    },
                                    }
                                }}
                                inputProps={{
                                    sx: {
                                    color: '#A9A9A9',
                                    fontSize: '16px',
                                    backgroundColor:'#000',
                                    padding:'11px 12px',
                                    borderRadius: "8px",
                                    "&::placeholder":{
                                        opacity: 1
                                        }
                                    },
                                    }}
                                    placeholder={"E-Mail Address"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    />
                        </div>
                    </div>

                    {/* row2 */}
                    <div className="flex flex-row justify-between gap-x-6">
                        <div className="w-full">
                            {/* CompanyName_Field */}
                            <CompanyNameField 
                                fullWidth
                                value={compName}
                                sx={{
                                    "& .MuiOutlinedInput-root":{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderWidth: "0rem",
                                        borderStyle: "solid",
                                        borderColor: '#A9A9A9',
                                        borderRadius: "8px"
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: "#fff"
                                    },
                                    }
                                }}
                                inputProps={{
                                    sx: {
                                    color: '#A9A9A9',
                                    fontSize: '16px',
                                    backgroundColor:'#000',
                                    padding:'11px 12px',
                                    borderRadius: "8px",
                                    "&::placeholder":{
                                        opacity: 1
                                        }
                                    },
                                    }}
                                    placeholder={"Company Name"}
                                    onChange={(e) => setCompName(e.target.value)}
                                    type="text"
                                    />
                        </div>
                        <div className="w-full">
                            {/* ContactInfo */}
                            <ContactField 
                                fullWidth
                                value={contact}
                                sx={{
                                    "& .MuiOutlinedInput-root":{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderWidth: "0rem",
                                        borderStyle: "solid",
                                        borderColor: '#A9A9A9',
                                        borderRadius: "8px"
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: "#fff"
                                    },
                                    }
                                }}
                                inputProps={{
                                    sx: {
                                    color: '#A9A9A9',
                                    fontSize: '16px',
                                    backgroundColor:'#000',
                                    padding:'11px 12px',
                                    borderRadius: "8px",
                                    "&::placeholder":{
                                        opacity: 1
                                        }
                                    },
                                    }}
                                    placeholder={"Contact Info"}
                                    onChange={(e) => setContact(e.target.value)}
                                    type="text"
                                    />
                        </div>
                    </div>
                    {/* row3 */}
                    <div className="flex flex-row justify-between gap-x-6">
                        <div className="w-full">
                        <Textarea
                        value={message} 
                        aria-label="minimum height" 
                        minRows={5} placeholder="Additional Note" 
                        style={{resize: 'none', border:"none"}}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        </div>
                    </div>
                    {/* row4 */}
                    <div className="flex flex-row justify-center pb-6 gap-x-6">
                        <div>
                        <Button
                            fullWidth 
                            sx={{
                            textTransform:"unset",
                            color:"#000",
                            fontSize: "17px",
                            padding: "0.5em 2.5em",
                            background: "#B9FF66",
                            borderRadius: "0px",
                            fontWeight:"600",
                            "&:hover":{
                                background: "#B9FF66"
                            }
                            }}
                            aria-label="Submit"
                            type="submit"
                            >
                            Submit Request
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </motion.div>
    </div>
  )
}

export default Contact;