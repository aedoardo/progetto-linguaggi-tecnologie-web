import React, {Component, Fragment} from "react";
import {withCookies} from "react-cookie";
import "./style.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setSignUpRealname, setSignUpUsername, setSignUpEmail, setSignUpPassword, setSignUpConfirmPassword} from "../../redux/actions/signup";

const mapStateToProps = (state) => ({...state.signUpReducer});

class SignUpComponent extends Component
{
    constructor(props) {
        super(props);
    }

    credentialsLengthCheck(credentials) {
        return credentials.filter(c => c.length <= 0).length > 0;
    }

    render() {
        let {signUpRealname, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword, dispatch} = this.props;
        let credentials = [signUpRealname, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword];
        return (
            <Fragment>
                <section
                    className={"d-flex flex-column justify-content-center align-items-center align-self-center h-100"}>
                    <div className={"d-flex registerBox p-4 flex-column"}>
                        <div className={"d-flex justify-content-center noselectText"}>
                            <div className={"d-flex logo align-self-center"}/>
                            <div className={"d-flex align-self-center text-muted titleLogin"}>
                                Classroom
                            </div>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <div className={"d-flex mt-4 signInText"}>
                                Crea un nuovo account
                            </div>
                        </div>
                        <div className={"d-flex flex-column"}>
                            <form ref={(ref) => this.signUpForm = ref} method={"post"} className={"col mt-4"}>
                                <div className={"d-flex flex-row justify-content-between"}>
                                    <div className={"form-group"}>
                                        <input onChange={(e) => dispatch(setSignUpRealname(e.target.value))}
                                           value={signUpRealname}
                                           required autoComplete={"off"} type={"text"}
                                           className={["form-control"].join(" ")}
                                           placeholder={"Nome e cognome"}/>
                                        {
                                            <small id={"realnameHelp"} className={"form-text text-muted"}>
                                                Inserisci il tuo nome e il tuo cognome.
                                            </small>
                                        }

                                        {
                                            <div className={"invalid-feedback"}>
                                                Test errore
                                            </div>
                                        }
                                    </div>

                                    <div className={"form-group"}>
                                        <input onChange={(e) => dispatch(setSignUpUsername(e.target.value))}
                                           value={signUpUsername}
                                           required autoComplete={"off"} type={"text"}
                                           className={["form-control"].join(" ")}
                                           placeholder={"Username"}/>
                                        {
                                            <small id={"usernameHelp"} className={"form-text text-muted"}>
                                                Inserisci un username per il tuo account.
                                            </small>
                                        }

                                        {
                                            <div className={"invalid-feedback"}>
                                                Test errore
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div className={"form-group"}>
                                    <input onChange={(e) => dispatch(setSignUpEmail(e.target.value))}
                                        value={signUpEmail}
                                        required autoComplete={"off"} type={"email"}
                                        className={["form-control"].join(" ")}
                                        aria-describedby={"emailHelp"} placeholder={"Indirizzo email"}/>
                                    {
                                        <small id={"emailHelp"} className={"form-text text-muted"}>
                                            Inserisci il tuo indirizzo email.
                                        </small>
                                    }

                                    {
                                        <div className={"invalid-feedback"}>
                                            Test errore
                                        </div>
                                    }
                                </div>


                                <div className={"form-group"}>
                                    <div className={"d-flex flex-row justify-content-between"}>
                                        <input onChange={(e) => dispatch(setSignUpPassword(e.target.value))}
                                           value={signUpPassword}
                                           required autoComplete={"off"} type={"password"}
                                           className={["form-control mr-4"].join(" ")}
                                           aria-describedby={"passwordHelp"} placeholder={"Password"}/>

                                       <input onChange={(e) => dispatch(setSignUpConfirmPassword(e.target.value))}
                                           value={signUpConfirmPassword}
                                           required autoComplete={"off"} type={"password"}
                                           className={["form-control"].join(" ")}
                                           aria-describedby={"passwordHelp"} placeholder={"Conferma password"}/>
                                    </div>
                                        {
                                            <small id={"passwordHelp"} className={"form-text text-muted"}>
                                                Inserisci una password di almeno 8 caratteri per il tuo account.
                                            </small>
                                        }

                                        {
                                            <div className={"invalid-feedback"}>
                                                Test
                                            </div>
                                        }
                                </div>

                                <div className={"d-flex mt-3 justify-content-between"}>
                                    <div className={"d-flex align-items-center createAccount"}>
                                        <Link to={"/"} className={"noDecoration"}>Accedi</Link>
                                    </div>

                                    <div>
                                        <button disabled={this.credentialsLengthCheck(credentials)}
                                                className={"btn btn-primary sapienzaButton"}>Registrati
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default withCookies(connect(mapStateToProps)(SignUpComponent));