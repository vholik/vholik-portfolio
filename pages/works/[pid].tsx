import { useRouter } from "next/router";
import cases from "../../cases";
import { CaseStyling } from "../../styles/Case";
import Header from "../components/Header";
import Image from "next/image";
import ArrowUp from "../images/arrow-up.svg";
import Link from "next/link";

function Case() {
  const router = useRouter();
  const { pid } = router.query;
  const currentCase = cases.find((work) => work.id === pid);
  if (!currentCase) return <div></div>;
  const nextCaseIndex = (): number => {
    if (parseInt(pid as string) === cases.length) {
      return 0;
    } else {
      return parseInt(pid as string);
    }
  };
  return (
    <CaseStyling>
      <Header />
      <div className="container">
        <div className="case-header">
          <div className="case-title">{currentCase.name}</div>
          <a href={currentCase.url} target="_blank" rel="noreferrer">
            <div className="visit-btn">
              <p>Visit website</p>
              <Image src={ArrowUp} alt="Visit" />
            </div>
          </a>
        </div>
      </div>
      <div
        className="cover-art"
        style={{
          backgroundImage: `url(${currentCase.images[0].src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="container">
        <div className="description-wrapper">
          <p className="case-description">{currentCase.description}</p>
          <div className="stack-wrapper">
            Technologies:
            <div className="technologies">
              {currentCase.techStack.map((technology, index) => (
                <div className="technology" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cases-wrapper">
          {currentCase.images.slice(1, -1).map((work, index) => (
            <div className="case" key={index}>
              <Image src={work} alt="Work" />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="next-case-wrapper">
          <div className="next-case">
            <div className="left">
              <div className="top">Next Case:</div>
              <div className="bottom">{cases[nextCaseIndex()]?.name}</div>
            </div>
            <Link href={`/works/${nextCaseIndex() + 1}`}>
              <div className="right">
                <Image src={ArrowUp} alt="Next case" height={100} width={100} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </CaseStyling>
  );
}

export default Case;
