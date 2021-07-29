import PropTypes from "prop-types";
import CountryFlag from "react-country-flag";
import { laguageToCountryCodeList } from "../../../defaults";

export interface LanguageFlagProps {
    original_language: string;
}

const LanguageFlag: React.FC<LanguageFlagProps> = ({ original_language }) => {
    //
    const getCountryFlag: (code: string) => string = (code) => {
        for (const key in laguageToCountryCodeList)
            if (key === code) return laguageToCountryCodeList[key];
        return code;
    };

    return (
        <>
            <CountryFlag
                className="emojiFlag"
                countryCode={getCountryFlag(original_language)}
            />
        </>
    );
};

LanguageFlag.propTypes = {
    original_language: PropTypes.string.isRequired,
};

export default LanguageFlag;
