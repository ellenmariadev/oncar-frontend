import { useEffect, useState } from "react";

function useMediaQuery(media: string) {
  const [match, setMatch] = useState<boolean | null>(null); // Specify the correct type for match

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
}

export default useMediaQuery;
