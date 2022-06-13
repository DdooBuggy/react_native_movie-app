import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";

const Tv = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: airingTodayLoading,
    data: airingTodayData,
    isRefetching: airingTodayRefetching,
  } = useQuery(["tv", "airingToday"], tvApi.airingToday);
  const {
    isLoading: topRatedLoading,
    data: topRatedData,
    isRefetching: topRatedRefetching,
  } = useQuery(["tv", "topRated"], tvApi.topRated);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: trendingRefetching,
  } = useQuery(["tv", "trending"], tvApi.trending);
  const onRefresh = () => {
    queryClient.refetchQueries(["tv"]);
  };
  const refreshing =
    airingTodayRefetching || topRatedRefetching || trendingRefetching;
  const loading = airingTodayLoading || topRatedLoading || trendingLoading;
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending TV" data={trendingData.results} />
      <HList title="Airing Today" data={airingTodayData.results} />
      <HList title="Top Rated TV" data={topRatedData.results} />
    </ScrollView>
  );
};

export default Tv;
