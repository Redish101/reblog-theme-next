import Skeleton from "react-loading-skeleton";
import "./loading.css";
import PageContainer from "@/components/layout/page-container";

export default function Loading() {
  return (
    <PageContainer>
      <div className="my-16 flex flex-col gap-4">
        <h1 className="text-3xl font-medium leading-normal">
          <Skeleton width="100%" height={60} />
        </h1>
        <div className="font-normal text-slate-600 dark:text-slate-400">
          <Skeleton width="14%" height={24} />
        </div>
      </div>
      <article className="flex flex-col gap-4">
        <p>
          <Skeleton width="100%" height={24} />
          <Skeleton width="100%" height={24} />
          <Skeleton width="12%" height={24} />
        </p>
        <p>
          <Skeleton width="100%" height={24} />
          <Skeleton width="100%" height={24} />
          <Skeleton width="25%" height={24} />
        </p>
      </article>
    </PageContainer>
  );
}
