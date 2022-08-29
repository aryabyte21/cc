import React from "react";
import { Text, NativeBaseProvider, ScrollView } from "native-base";
import Contests from "./Contests";

function ContestList(props) {
  const data = props.data;
  const codechef = data.filter(function (con) {
    return con.site == "CodeChef";
  });
  const codeforces = data.filter(function (con) {
    return con.site == "CodeForces";
  });
  const leetcode = data.filter(function (con) {
    return con.site == "LeetCode";
  });
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Text
          pl="32"
          bg="coolGray.800"
          p="2"
          rounded="md"
          color="white"
          fontSize="lg"
          my="4"
        >
          CodeChef
        </Text>
        {codechef.map((contest) => (
          <Contests
            site={contest.site}
            name={contest.name}
            start={contest.start_time}
            end={contest.end_time}
            status={contest.status}
            key={contest.name + contest.end_time}
          />
        ))}

        <Text
          pl="32"
          bg="coolGray.800"
          p="2"
          rounded="md"
          color="white"
          fontSize="lg"
          my="4"
        >
          CodeForces
        </Text>
        {codeforces.map((contest) => (
          <Contests
            site={contest.site}
            name={contest.name}
            start={contest.start_time}
            end={contest.end_time}
            status={contest.status}
            key={contest.name + contest.end_time}
          />
        ))}

        <Text
          pl="32"
          bg="coolGray.800"
          p="2"
          rounded="md"
          color="white"
          fontSize="lg"
          my="4"
        >
          LeetCode
        </Text>
        {leetcode.map((contest) => (
          <Contests
            site={contest.site}
            name={contest.name}
            start={contest.start_time}
            end={contest.end_time}
            status={contest.status}
            key={contest.name + contest.end_time}
          />
        ))}

        {data.map((contest) => (
          <Contests
            site={contest.site}
            name={contest.name}
            start={contest.start_time}
            end={contest.end_time}
            status={contest.status}
            key={contest.name + contest.end_time}
          />
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ContestList;
