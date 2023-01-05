import React, { useRef, useState } from "react";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import cont from "./contacts.module.css";
import { Button } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";  
import swal from 'sweetalert';


export const Contact = () => {
    const [load1, set1Loading] = useState(false);
    const [load2, set2Loading] = useState(false);
    const [load3, set3Loading] = useState(false);
    const [emailsending, emailLoading] = useState(false);
    const form = useRef();

    const handleLoad1 = () => {
        set1Loading(true);
        setTimeout(() => {
            set1Loading(false);
        }, 1000);
    };
    const handleLoad2 = () => {
        set2Loading(true);
        setTimeout(() => {
            set2Loading(false);
        }, 1000);
    };
    const handleLoad3 = () => {
        set3Loading(true);
        setTimeout(() => {
            set3Loading(false);
        }, 1000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailLoading(true);  
        setTimeout(() => {
            emailLoading(false);
        }, 2000);

        emailjs.sendForm(
            "service_x8ah85s",
            "template_0hob5st",
            form.current,
            "C_zzCKTMDoBITRzMC"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    swal({
                        title: "Sent",
                        text: "You message hase been sent",
                        icon: "success",
                        button: "OK",
                      });
                },
                (error) => {
                    console.log(error.text);
                    swal({
                        title: "Some thing went wrong!",
                        text: "Try again later",
                        icon: "error",
                        button: "OK",
                      });
                }
            );
        e.target.reset(); 
    };

    return (
        <div className={cont.box}>
            <h5> Get In Touch </h5>
            <h2> Contact Me </h2>

            <div className={cont.linkon}>
                <div>
                    <div className={cont.icon2}>
                        <MdOutlineEmail size="60px" color="red" />
                        <h4> Email </h4>
                        <h5> tushitsaxena4@gmail </h5>
                        <Button
                            isLoading={load1}
                            loadingText="Email"
                            size={{base:"sm", xl:"lg"}}
                            w={{base:"90%", xl:"80%"}}
                            colorScheme="red"
                            variant="solid"
                            onClick={handleLoad1}
                        >
                            <a href="mailto:tushitsaxena4@gmail.com"> Send a message </a>
                        </Button>
                    </div>
                    <div className={cont.icon2}>
                        <RiMessengerLine size="60px" color="blue" />
                        <h4> Facebook </h4>
                        <h5> Messenger </h5>
                        <Button
                            isLoading={load2}
                            loadingText="Facebook"
                            colorScheme="blue"
                            variant="solid"
                            size={{base:"sm", xl:"lg"}}
                            w={{base:"90%", xl:"80%"}}
                            onClick={handleLoad2}
                        >
                            <a href="https://m.me/tushit.saxena"> Send a message </a>
                        </Button>
                    </div>
                    <div className={cont.icon2}>
                        <BsWhatsapp size="60px" color="green" />
                        <h4> WhatsApp </h4>
                        <Button
                            isLoading={load3}
                            loadingText="Whatsapp"
                            colorScheme="teal"  
                            size={{base:"sm", xl:"lg"}}
                            w={{base:"90%", xl:"80%"}}
                            variant="solid"
                            onClick={handleLoad3}
                        >
                            <a href="https://api.whatsapp.com/send?phone=+916397310463">
                                {" "}
                                Send a message{" "}
                            </a>
                        </Button>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className={cont.form}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter name" name="user_name" required />
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" name="user_email" required />
                    <label>Message</label>
                    <textarea name="message" placeholder="Enter message" required />
                    <Button  
                        isLoading={emailsending}
                        bg="whiteAlpha.100"
                        color="black" 
                        boxShadow='md' 
                        variant="solid"
                        w="80%" 
                        m="20px auto" 
                        textAlign="center" 
                        loadingText="Sending message"
                        type="submit"
                        _hover={{
                            boxShadow:'outline',
                          }}
                        value="Send">
                        {" "}
                        Send email{" "}
                    </Button>
                    {/* ==> npm install emailjs-com --save */}
                </form>
            </div>
        </div>
    );
};
