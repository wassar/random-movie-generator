import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import { Typography } from "@material-ui/core";

import { SkeletonComponent, LoadingContexnt } from "..";

export interface StoryProps {
    overview: string;
}

const Story: React.FC<StoryProps> = ({ overview = "" }) => {
    const [story, setStory] = useState(overview);

    const isLoading = useContext(LoadingContexnt);

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
            {isLoading ? (
                <>
                    <SkeletonComponent animation="wave" />
                    <SkeletonComponent animation="wave" />
                    <SkeletonComponent animation="wave" />
                    <SkeletonComponent animation="wave" width="70%" />
                </>
            ) : (
                <Typography paragraph>{story}</Typography>
            )}
        </>
    );
};

Story.propTypes = {
    overview: PropTypes.string.isRequired,
};

export default Story;
