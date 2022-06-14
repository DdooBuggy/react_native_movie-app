import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IMovie, ITv } from "../api";
import VMedia from "../components/VMedia";

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;
const ListContainer = styled.View`
  margin-bottom: 40px;
`;
const HListSeparator = styled.View`
  width: 20px;
`;

interface HListProps {
  title: string;
  data: IMovie[] | ITv[];
}
const HList: React.FC<HListProps> = ({ title, data }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <FlatList
      //@ts-ignore
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={HListSeparator}
      contentContainerStyle={{ paddingHorizontal: 30 }}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => (
        <VMedia
          posterPath={item.poster_path || ""}
          //@ts-ignore
          originalTitle={item.original_title ?? item.original_name}
          voteAverage={item.vote_average}
          fullData={item}
        />
      )}
    />
  </ListContainer>
);

export default HList;
