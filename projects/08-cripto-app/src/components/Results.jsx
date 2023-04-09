export const ShowSkeleton = ({ isLoading, criptoResults }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-5 mb-5 border border-white rounded-lg md:w-2/4 h-72">
      {isLoading ? <Skeleton /> : <Results criptoResults={criptoResults} />}
    </div>
  );
};

export const Results = ({ criptoResults }) => {
  return Object.keys(criptoResults).length === 0 ? (
    <WaitingResults />
  ) : (
    <ResultsQuotation criptoResults={criptoResults} />
  );
};
const WaitingResults = () => {
  return (
    <p className="text-xl font-medium text-white">Esperando un resultado</p>
  );
};

const ResultsQuotation = ({ criptoResults }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    criptoResults;

  return (
    <>
      <img
        className="w-20"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">
          El precio es de: <span className="font-normal">{PRICE}</span>
        </p>
        <p className="text-lg font-semibold text-white">
          Precio más alto del día:{" "}
          <span className="font-normal">{HIGHDAY}</span>
        </p>
        <p className="text-lg font-semibold text-white">
          Precio más bajo del día: <span className="font-normal">{LOWDAY}</span>
        </p>
        <p className="text-lg font-semibold text-white">
          Variación últimas 24 horas:{" "}
          <span className="font-normal">{CHANGEPCT24HOUR}</span>
        </p>
        <p className="text-lg font-semibold text-white">
          Última Actualización:{" "}
          <span className="font-normal">{LASTUPDATE}</span>
        </p>
      </div>
    </>
  );
};

const Skeleton = () => {
  return (
    <div className="flex animate-pulse w-[90%]">
      <div className="flex flex-col items-center w-full gap-4">
        <span className="w-20 h-20 bg-gray-700 rounded-full" />

        <div className="flex flex-col w-full gap-4">
          <div className="w-full h-4 bg-gray-700 rounded-md" />
          <div className="w-full h-4 bg-gray-700 rounded-md" />
          <div className="w-full h-4 bg-gray-700 rounded-md" />
          <div className="w-full h-4 bg-gray-700 rounded-md" />
          <div className="w-full h-4 bg-gray-700 rounded-md" />
        </div>
      </div>
    </div>
  );
};
