import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

export interface StoryProps {
    overview: string;
}

const Story: React.FC<StoryProps> = ({ overview }) => {
    const [story, setStory] = useState(overview);

    useEffect(() => {
        if (overview.length > parseInt(process.env.MAX_STORY_LENGTH!)) {
            const subs = overview.substr(
                0,
                parseInt(process.env.MAX_STORY_LENGTH!) - 3
            );
            setStory(`${subs.substr(0, subs.lastIndexOf(" "))}... `);
        } else setStory(overview);

        //eslint-disable-next-line
    }, [overview]);

    return (
        <>
            <Typography paragraph>{story}</Typography>
        </>
    );
};

export default Story;
