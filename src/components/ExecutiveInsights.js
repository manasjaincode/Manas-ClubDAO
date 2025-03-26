import { useState } from "react";

const ExecutiveInsights = () => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState("");

  const insightsPool = [
    "🔍 Insight: You have 45 registrations from 1st year and 28 from 2nd year. Consider focusing promotions on 2nd year students to boost participation.",
    "🔍 Insight: Event feedback shows higher engagement from tech-oriented clubs. Consider collaborations with coding societies.",
    "🔍 Insight: Peak registration times are between 6-8 PM. Optimize your outreach during these hours for better results.",
  ];

  const generateInsights = () => {
    setLoading(true);
    setInsight("");
    setTimeout(() => {
      setLoading(false);
      const random = Math.floor(Math.random() * insightsPool.length);
      setInsight(insightsPool[random]);
    }, 3000); // 3 second delay
  };

  return (
    <div className="bg-black border border-gray-600 rounded-xl p-6 w-[95%] max-w-md shadow-md space-y-4 hover:shadow-green-500/30 transition-all duration-300 mx-auto">
      <h3 className="text-white text-xl font-semibold">AI Insights</h3>
      <button
        onClick={generateInsights}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white w-full py-2.5 rounded-lg transition disabled:opacity-50"
      >
        Generate AI-powered insights
      </button>

      {loading && (
        <p className="text-sm text-green-400 pt-2">AI is analyzing...</p>
      )}

      {insight && !loading && (
        <p className="text-sm text-green-400 border-t border-gray-500 pt-2 animate-fadeIn">
          {insight}
        </p>
      )}
    </div>
  );
};

export default ExecutiveInsights;
