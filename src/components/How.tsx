import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {DataContext} from "../core/contexts/data";

const How = () => {
    const submit = useContext(DataContext);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onBlur" || "onSubmit",
    });
    const onSubmit = (data: any) => {
        submit.handleSubmitForm(data);
    };

    return (
        <section id="How" className="how">
            <div className="how-redline" />
            <div className="how_text">
                <div className="how_form">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="how_title">How to find us?</h2>
                        <div className="input_container">
                            <label className="input_label">First name *</label>
                            <div className="input_block">
                                <input
                                    className={`${
                                        errors.firstname ? " error" : ""
                                    }  input`}
                                    type="text"
                                    placeholder="FIRST NAME"
                                    {...register("firstname", {required: true})}
                                />
                                {errors.firstname && (
                                    <p className="error-explicit">
                                        Ce champ est obligatoire
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Last name *</label>
                            <div className="input_block">
                                <input
                                    className={`${
                                        errors.lastname ? " error" : ""
                                    }  input`}
                                    type="text"
                                    placeholder="LAST NAME"
                                    {...register("lastname", {required: true})}
                                />
                                {errors.lastname && (
                                    <p className="error-explicit">
                                        Ce champ est obligatoire
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Email *</label>
                            <div className="input_block">
                                <input
                                    className={`${
                                        errors.email ? " error" : ""
                                    }  input`}
                                    type="text"
                                    placeholder="EMAIL"
                                    {...register("email", {required: true})}
                                />
                                {errors.email && (
                                    <p className="error-explicit">
                                        Ce champ est obligatoire
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Comment</label>
                            <div className="input_block">
                                <textarea
                                    rows={3}
                                    className={`${
                                        errors.comment ? " error" : ""
                                    } input`}
                                    placeholder="WHAT'S YOUR QUESTION?"
                                    {...register("comment", {})}
                                />
                            </div>
                            <button className="button_submit" type="submit">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
                <div className="how_coordinate">
                    <div className="coordinate-container">
                        <div className="logo_star-col" />
                        <p>
                            BORGARFLÖT759,
                            <br />
                            SAUDÁRKRÖKUR,
                            <br />
                            ISLANDE
                            <br />
                            <br />
                            NORTHDEERS@GMAIL.COM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default How;
