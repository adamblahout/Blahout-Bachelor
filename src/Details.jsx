import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchGameById from "./fetchGameById";
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchGameById);
  if (results.isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  const game = results.data;
  console.log(game);
  console.log(game.screenshots.image);

  const images = game.screenshots;

  let systemRequirements = game.minimum_system_requirements;

  console.log(game.minimum_system_requirements);
  return (
    <div className="game">
      <h1 className="text-center text-2xl font-bold">{game.title}</h1>
      <img
        src={game.thumbnail}
        alt="obrazek"
        className="m-12 mx-auto w-96 rounded-lg"
      />
      <h2 className="mb-4 text-center text-lg font-bold">Foto Galerie:</h2>
      <div className="ml-5 mr-5 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <img
            src={image.image}
            key={image.id}
            className="m-auto gap-1 rounded-lg sm:w-1/2 md:w-auto lg:w-auto"
          />
        ))}
      </div>
      <div className="detail-games-everything m-12">
        <div className="grid_for_two grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="inline font-bold">Odkaz na stažení: </h3>
            <a href={game.game_url} className="text-blue-500 hover:text-black">
              {game.game_url}
            </a>
            <h3 className=" pb-5 pt-5">
              <strong>Žánr: </strong>
              {game.genre}
            </h3>
            <h3 className=" pb-5">
              <strong>Vývojář: </strong>
              {game.developer}
            </h3>
            <h3 className=" pb-5">
              <strong>Vydavatel:</strong> {game.publisher}
            </h3>
            <h3 className=" pb-5">
              <strong>Podporované OS:</strong> {game.platform}
            </h3>
            <h3 className=" pb-5">
              <strong>Datum vydání:</strong> {game.release_date}
            </h3>
          </div>
          <div>
            <div className="minimal_requirements text-center">
              <h3 className="  pb-5 text-lg font-bold">
                Minimální systémové požadavky:
              </h3>
              <table className="mx-auto table-auto rounded-b-lg rounded-t-lg bg-gray-300">
                <thead></thead>
                <tbody className="list-disc rounded-lg [&>*:nth-child(odd)]:bg-gray-400">
                  <tr className="graphics ">
                    <th className="p-2">
                      <strong>Graphics:</strong>
                    </th>
                    <td>
                      {systemRequirements?.graphics ? (
                        <> {systemRequirements?.graphics} </>
                      ) : (
                        "neuvedeno"
                      )}
                    </td>
                  </tr>
                  <tr className="memory">
                    <th className="p-2">
                      <strong>Memory:</strong>
                    </th>
                    <td>
                      {systemRequirements?.memory ? (
                        <> {systemRequirements?.memory} </>
                      ) : (
                        "neuvedeno"
                      )}
                    </td>
                  </tr>
                  <tr className="operating_system">
                    <th className="p-2">
                      <strong>OS:</strong>
                    </th>
                    <td>
                      {systemRequirements?.os ? (
                        <> {systemRequirements?.os} </>
                      ) : (
                        "neuvedeno"
                      )}
                    </td>
                  </tr>
                  <tr className="Processor">
                    <th className="p-2">
                      <strong>Processor:</strong>
                    </th>
                    <td>
                      {systemRequirements?.processor ? (
                        <> {systemRequirements?.processor} </>
                      ) : (
                        "neuvedeno"
                      )}
                    </td>
                  </tr>
                  <tr className="storage rounded-b-lg">
                    <th className="p-2">
                      <strong>Storage:</strong>
                    </th>
                    <td>
                      {systemRequirements?.storage ? (
                        <> {systemRequirements?.storage} </>
                      ) : (
                        "neuvedeno"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h2 className="pb-2 pt-6 text-lg font-bold">Description:</h2>
        <p>{game.description}</p>
        <Link to="/">
          <button className=" float-right mb-6 rounded-lg bg-blue-400 p-4 hover:opacity-80">
            Zpět
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
