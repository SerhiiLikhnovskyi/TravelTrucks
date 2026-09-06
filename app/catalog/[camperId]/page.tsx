import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCamperById } from "@/lib/api/api";
import CamperPage from "./CamperPage.client";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function Camper({ params }: Props) {
  const { camperId } = await params;

  const queryClient = new QueryClient();

  await queryClient
    .query({
      queryKey: ["camper", camperId],
      queryFn: () => getCamperById(camperId),
    })
    .catch(() => {
      notFound();
    });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperPage camperId={camperId} />
    </HydrationBoundary>
  );
}
