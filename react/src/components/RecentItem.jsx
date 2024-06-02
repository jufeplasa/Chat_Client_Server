import { BanknotesIcon } from "@heroicons/react/24/outline";


function RecentItem() {
  return (
    <div className="recent-item">
      <div>
        <BanknotesIcon />
      </div>
      <p>28 January 2024</p>
      <p>$2,500</p>
    </div>
  );
}

export default RecentItem;
