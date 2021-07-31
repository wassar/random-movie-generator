import { Typography } from "@material-ui/core";
import Image from "next/image";
import errorImage from "./error.svg";

export interface ErrorProps {
    error?: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Image src={errorImage} width={100} height={100} alt={error} />
                <Typography variant="subtitle1">{error}</Typography>
            </div>
        </>
    );
};

export default Error;
