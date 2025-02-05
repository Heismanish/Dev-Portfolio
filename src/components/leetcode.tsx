"use client";
import { useState, useEffect } from "react";
type LeetData = {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: Record<string, unknown>; // Adjust this type as needed based on structure
};
type leetDataType = {
  totalSolved: number;
};

const Leetcode = () => {
  const [leetData, setLeetData] = useState<leetDataType>({
    totalSolved: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const leetcodeFethcer = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://leetcode-stats-api.herokuapp.com/heismanish"
      );

      const data: Promise<LeetData> = res.json();

      setLeetData({ totalSolved: (await data).totalSolved });
    } catch (error) {
      console.log("Error while fetching letcode data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    leetcodeFethcer();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="prose prose-neutral dark:prose-invert text-sm">
      <p>Solved: {leetData.totalSolved} </p>
    </div>
  );
};

export default Leetcode;
