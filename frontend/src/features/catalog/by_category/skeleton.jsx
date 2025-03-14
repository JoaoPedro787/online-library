// Skeleton Loading
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Mudar para array em vez de ser manual
const CategorySkeleton = () => (
  <Skeleton
    height={504}
    width={"100%"}
    borderRadius={"1em"}
    style={{
      padding: "4px",
    }}
  />
);

export default CategorySkeleton;
