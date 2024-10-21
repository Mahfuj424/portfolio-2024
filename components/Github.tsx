import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex justify-center pb-2.5">
      <GitHubCalendar
        username="Mahfuj424"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}

export default Github;
