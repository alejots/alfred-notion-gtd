import alfy from "alfy";
import config from "../config.json" assert { type: "json" };

/**
 * get today in a format Harvest accepts
 * @returns {string} today's date in format '2019-10-20'
 */
const getToday = () => {
  const d = new Date();
  const today = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${(
    "0" + d.getDate()
  ).slice(-2)}`;
  return today;
};

const startHarvest = async () => {
  const today = getToday();

  const url = `https://api.harvestapp.com/v2/time_entries?project_id=${config.harvestProjectId}&task_id=${config.harvestTaskId}&spent_date=${today}`;

  alfy
    .fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.harvestToken}`,
        "Harvest-Account-ID": config.harvestAccountId,
      },
    })
    .then(() => {
      console.log(true);
    });
};

startHarvest();
