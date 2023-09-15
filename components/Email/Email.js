import { useState } from "react";
import Link from "next/link";

const Details = ({ isVisible, onClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");

   
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    };

    // const sendEmail = async () => {
    //     axios
    //         .post(
    //             `localhost:8081/sendEmail/email?recipient=${email}&body=${body}&subject=Confirmation`,
    //             {
    //                 firstName: name,
    //                 lastName: surname,
    //                 date: "2023/08/09",
    //                 time: "14:04",
    //                 description: "Build me a school"
    //             }
    //         )
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    return (
        <div
            className="fixed inset-0 bg-black-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}
            id="wrapper"
        >
            <div className="w-[600px]">
                <button
                    className="text-white text-xl place-self-end"
                    onClick={() => onClose()}
                >
                    X
                </button>
                <div className="bg-gray-100 rounded-lg shadow-md p-10 w-59 ">
                    <div className="text-center p-8">
                        <h3>Enter your information</h3>
                    </div>
                   

                    <div className="mb-4">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Link href="/">
                        <button
                            className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
                            onClick={() => setShowModal(true)}
                        >
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
