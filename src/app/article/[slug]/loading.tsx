import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="my-16 flex flex-col gap-4">
      <Skeleton height={60} /> {/* 替换标题 */}
      <Skeleton height={25} /> {/* 替换日期 */}
      <Skeleton count={5} height={50} /> {/* 替换正文部分 */}
    </div>
  );
}
