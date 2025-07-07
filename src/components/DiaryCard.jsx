import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns"; //https://www.npmjs.com/package/date-fns

const DiaryCard = ({ entry }) => {
  const relativeTime = formatDistanceToNow(new Date(entry.publishedAt), {
    addSuffix: true,
  });

  // const dateObj = new Date(entry.publishedAt);
  // const prettyDate = dateObj.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  return (
    <Link to={`entry/${entry.id}`}>
      <div className="card bg-base-100 w-96 shadow-gray-100 shadow-sm hover:shadow-blue-200 hover:shadow-2xl rounded-2xl">
        <div className="card-body">
          <h2 className="card-title">{entry.title}</h2>
          <p className="line-clamp-4">{entry.text}</p>
          <p className="text-gray-500 text-sm">{relativeTime}</p>
          <p>{entry.excerpt}</p>
        </div>
        <figure className="overflow-hidden">
          <img
            src={entry.image}
            alt="image"
            className="aspect-3/2 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </figure>
      </div>
    </Link>
  );
};

export default DiaryCard;
