import { styled } from "@material-ui/styles";
import { Skeleton } from "@material-ui/lab";

const SkeletonComponent = styled(Skeleton)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default SkeletonComponent;
