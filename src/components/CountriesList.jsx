import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group text-center">
        {countries.map((e) => {
          return (
            <Link
              className="list-group-item list-group-item-action d-flex flex-column align-items-center"
              name={e.alpha2Code}
              key={e.alpha3Code}
              to={`/${e.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
                width="10%"
                alt="flag"
              />
              {`${e.alpha2Code} ${e.name.common}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
