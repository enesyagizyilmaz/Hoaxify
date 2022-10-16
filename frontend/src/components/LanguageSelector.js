import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
    const {i18n} = useTranslation();
    const onChangeLanguage = language => {
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return(
        <div className={"container"}>
            <img
                src="https://countryflagsapi.com/svg/tr"
                alt="Turkish flag"
                width="40" height="24"
                onClick={() => onChangeLanguage('tr')}
                style={{cursor:'pointer'}}
            />
            <img src="https://countryflagsapi.com/svg/gb"
                 alt="UK flag"
                 width="50" height="24"
                 onClick={() => onChangeLanguage('en')}
                 style={{cursor:'pointer'}}
            />
        </div>
    );
};

export default LanguageSelector;