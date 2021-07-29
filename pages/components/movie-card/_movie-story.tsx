import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

export interface StoryProps {
    overview: string;
}

const Story: React.FC<StoryProps> = ({ overview }) => {
    const [story, setStory] = useState(overview);

    useEffect(() => {
        const maxLength = parseInt(process.env.MAX_STORY_LENGTH!) - 3;
        // checks for long movie story
        if (overview.length > maxLength) {
            //export ideal size excerpt with complete word at the end
            const subs = overview.substr(0, maxLength).lastIndexOf(" ");

            setStory(`${overview.substr(0, subs)}...`);
        } else setStory(overview);

        //eslint-disable-next-line
    }, [overview]);

    return (
        <>
            <Typography paragraph>{story}</Typography>
        </>
    );
};

Story.propTypes = {
    overview: PropTypes.string.isRequired,
};

export default Story;
