import Tag from "../../Tag";
import { COLORS } from "@/data/dynamic/Tags";
import Link from "next/link";
import { ICONS } from "@/data/dynamic/admin/Icons";
import Loading from "@/components/dynamic/Loading";

const Table = ({ data }) => {
  return data === null ? (
    <Loading />
  ) : (
    <div className="grid grid-cols-4 overflow-y-scroll">
      {data
        .filter((group) => !group.hidden)
        .map((group, index) => (
          <div key={index} className="flex justify-between items-start p-2">
            <div className="bg-white w-full p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <Tag color={COLORS["grayblue"]} text={group.name} />
                <div className="flex justify-start w-full ml-2">
                  {group.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      target="_blank"
                      className="m-0 p-0 text-black no-underline hover:!text-hackathon-blue-100 text-xl"
                    >
                      {ICONS[link.name]}
                    </Link>
                  ))}
                </div>
                <p className="mb-0 text-hackathon-green-300 font-semibold whitespace-nowrap">
                  table {group.table}
                </p>
              </div>
              {group.rounds.map((judges, index) => (
                <div key={index} className="flex items-center my-2">
                  <p className="font-semibold mb-0 mr-2">{index + 1}</p>
                  <div className="flex items-center">
                    {judges.map((judge, i) => (
                      <Tag
                        classes="mx-1"
                        color={COLORS[judge.affiliation]}
                        key={i}
                        text={judge.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Table;
