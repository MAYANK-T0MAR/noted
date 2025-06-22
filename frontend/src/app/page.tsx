"use client"

import FeedBox from "@/components/layout/feed";
import FeedHeader from "@/components/layout/feedHeader";
import { useHeaderVisibilityContext } from "./providers/HeaderVisibilityContext";

export default function Home() {
  const { showHeader } = useHeaderVisibilityContext()

  return (
    <>
      <FeedHeader showHeader={showHeader} />
      <FeedBox showHeader={showHeader} />
    </>
  );
}
