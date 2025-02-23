// "use strict";

// (() => {
//   const API_URL =
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
//   const coinsContainer = document.getElementById("coins-container");
//   const reportContainer = document.getElementById("report-container");
//   const searchInput = document.getElementById("search-input");
//   const errorContainer = document.createElement("div");
//   errorContainer.id = "error-container";
//   document.body.prepend(errorContainer);

//   let selectedCoins = [];
//   let coins = [];
//   let graphInterval;

//   const savedCoins = localStorage.getItem("selectedCoins");
//   if (savedCoins) {
//     selectedCoins = JSON.parse(savedCoins);
//   }

//   async function fetchCoins() {
//     try {
//       const response = await fetch(API_URL);
//       coins = await response.json();
//       displayCoins(coins);
//     } catch (error) {
//       showError("Error fetching coins. Please try again later.");
//     }
//   }

//   function displayCoins(coinsToDisplay) {
//     coinsContainer.innerHTML = "";
//     coinsToDisplay.forEach((coin) => {
//       const card = document.createElement("div");
//       card.className = "col-12 col-md-4 col-lg-3 mb-4";
//       card.innerHTML = `
//         <div class="card p-3">
//           <img src="${coin.image}" alt="${coin.name} logo" class="card-img-top">
//           <div class="card-body text-center">
//             <h5 class="card-title">${coin.name}</h5>
//             <p class="card-text">Price: $${coin.current_price.toFixed(2)}</p>
//             <p class="card-text">Change (24h): ${coin.price_change_percentage_24h.toFixed(
//               2
//             )}%</p>
//             <div class="button-container">
//               <button class="btn btn-info mb-2" onclick="fetchMoreInfo('${
//                 coin.id
//               }')">More Info</button>
//               <div class="form-check form-switch">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   role="switch"
//                   id="switch-${coin.id}"
//                   ${selectedCoins.includes(coin.id) ? "checked" : ""}
//                   onclick="toggleReport('${coin.id}')"
//                 >
//                 <label class="form-check-label" for="switch-${coin.id}">
//                   ${
//                     selectedCoins.includes(coin.id)
//                       ? "Remove from Report"
//                       : "Add to Report"
//                   }
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//       coinsContainer.appendChild(card);
//     });
//   }

//   async function fetchMoreInfo(coinId) {
//     try {
//       const response = await fetch(
//         `https://api.coingecko.com/api/v3/coins/${coinId}`
//       );
//       const coinDetails = await response.json();
//       showModal(coinDetails);
//     } catch (error) {
//       showError("Failed to fetch additional information. Please try again.");
//     }
//   }

//   function showModal(coinDetails) {
//     const modal = document.createElement("div");
//     modal.className = "modal fade";
//     modal.id = "coinModal";
//     modal.innerHTML = `
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title">${coinDetails.name} Details</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//             <p><strong>Symbol:</strong> ${coinDetails.symbol.toUpperCase()}</p>
//             <p><strong>Description:</strong> ${coinDetails.description.en.substring(
//               0,
//               200
//             )}...</p>
//             <p><strong>Current Price (USD):</strong> $${coinDetails.market_data.current_price.usd.toFixed(
//               2
//             )}</p>
//           </div>
//         </div>
//       </div>
//     `;
//     document.body.appendChild(modal);
//     const bootstrapModal = new bootstrap.Modal(modal);
//     bootstrapModal.show();
//     modal.addEventListener("hidden.bs.modal", () => modal.remove());
//   }

//   function toggleReport(coinId) {
//     if (selectedCoins.includes(coinId)) {
//       selectedCoins = selectedCoins.filter((id) => id !== coinId);
//     } else if (selectedCoins.length < 5) {
//       selectedCoins.push(coinId);
//     } else {
//       alert("You can only add up to 5 coins to the report.");
//       return;
//     }

//     localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
//     updateReportList();
//     displayCoins(coins);
//     fetchAndRenderGraph();
//   }

//   function updateReportList() {
//     const reportList = document.getElementById("report-list");
//     reportList.innerHTML = selectedCoins
//       .map(
//         (coin) =>
//           `<p>${coin} <button class="btn btn-danger btn-sm" onclick="toggleReport('${coin}')">Remove</button></p>`
//       )
//       .join("");
//   }

//   async function fetchAndRenderGraph() {
//     const graphContainer = document.getElementById("report-graph");
//     graphContainer.innerHTML = "";

//     if (selectedCoins.length === 0) {
//       graphContainer.innerHTML =
//         "<p>No coins selected. Add coins to view the graph.</p>";
//       return;
//     }

//     try {
//       const datasets = [];
//       for (const coinId of selectedCoins) {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
//         );

//         if (!response.ok) throw new Error(`Failed to fetch data for ${coinId}`);

//         const data = await response.json();

//         if (!data.prices || !Array.isArray(data.prices)) {
//           console.warn(`Invalid data format for ${coinId}`);
//           continue;
//         }

//         const coinData = data.prices.map(([time, price]) => ({
//           x: new Date(time),
//           y: price,
//         }));

//         datasets.push({
//           type: "line",
//           showInLegend: true,
//           name: coinId,
//           dataPoints: coinData,
//         });
//       }

//       if (datasets.length === 0) {
//         graphContainer.innerHTML =
//           "<p>No valid data available for the selected coins.</p>";
//         return;
//       }

//       const chart = new CanvasJS.Chart("report-graph", {
//         animationEnabled: true,
//         theme: "light2",
//         title: {
//           text: "Cryptocurrency Prices (Last 7 Days)",
//         },
//         axisX: {
//           valueFormatString: "DD MMM",
//         },
//         axisY: {
//           title: "Price (USD)",
//           prefix: "$",
//         },
//         data: datasets,
//       });

//       chart.render();
//     } catch (error) {
//       console.error("Error fetching or rendering graph data:", error);
//       graphContainer.innerHTML =
//         "<p>Failed to load the graph. Please try again later.</p>";
//     }
//   }

//   function showError(message, type = "error") {
//     errorContainer.className = `alert ${
//       type === "error" ? "alert-danger" : "alert-success"
//     }`;
//     errorContainer.textContent = message;
//     setTimeout(() => {
//       errorContainer.textContent = "";
//       errorContainer.className = "";
//     }, 5000);
//   }

//   searchInput.addEventListener("input", (e) => {
//     const query = e.target.value.toLowerCase();
//     const filteredCoins = coins.filter(
//       (coin) =>
//         coin.name.toLowerCase().includes(query) ||
//         coin.symbol.toLowerCase().includes(query)
//     );
//     displayCoins(filteredCoins);
//   });

//   fetchCoins();
//   updateReportList();
//   fetchAndRenderGraph();

//   window.fetchMoreInfo = fetchMoreInfo;
//   window.toggleReport = toggleReport;
// })();

// /////////////////////////////////////////////////////////////

"use strict";

(() => {
  // כתובת ה-API עם Proxy
  const API_URL =
    "https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const coinsContainer = document.getElementById("coins-container");
  const reportContainer = document.getElementById("report-container");
  const searchInput = document.getElementById("search-input");
  const errorContainer = document.createElement("div");
  errorContainer.id = "error-container";
  document.body.prepend(errorContainer);

  let selectedCoins = [];
  let coins = [];
  let graphInterval;

  const savedCoins = localStorage.getItem("selectedCoins");
  if (savedCoins) {
    selectedCoins = JSON.parse(savedCoins);
  }

  async function fetchCoins() {
    try {
      const response = await fetch(API_URL);
      coins = await response.json();
      displayCoins(coins);
    } catch (error) {
      showError("Error fetching coins. Please try again later.");
    }
  }

  function displayCoins(coinsToDisplay) {
    coinsContainer.innerHTML = "";
    coinsToDisplay.forEach((coin) => {
      const card = document.createElement("div");
      card.className = "col-12 col-md-4 col-lg-3 mb-4";
      card.innerHTML = `
        <div class="card p-3">
          <img src="${coin.image}" alt="${coin.name} logo" class="card-img-top">
          <div class="card-body text-center">
            <h5 class="card-title">${coin.name}</h5>
            <p class="card-text">Price: $${coin.current_price.toFixed(2)}</p>
            <p class="card-text">Change (24h): ${coin.price_change_percentage_24h.toFixed(
              2
            )}%</p>
            <div class="button-container">
              <button class="btn btn-info mb-2" onclick="fetchMoreInfo('${
                coin.id
              }')">More Info</button>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switch-${coin.id}"
                  ${selectedCoins.includes(coin.id) ? "checked" : ""}
                  onclick="toggleReport('${coin.id}')"
                >
                <label class="form-check-label" for="switch-${coin.id}">
                  ${
                    selectedCoins.includes(coin.id)
                      ? "Remove from Report"
                      : "Add to Report"
                  }
                </label>
              </div>
            </div>
          </div>
        </div>
      `;
      coinsContainer.appendChild(card);
    });
  }

  async function fetchMoreInfo(coinId) {
    try {
      const response = await fetch(
        `https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const coinDetails = await response.json();
      showModal(coinDetails);
    } catch (error) {
      showError("Failed to fetch additional information. Please try again.");
    }
  }

  function showModal(coinDetails) {
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "coinModal";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${coinDetails.name} Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Symbol:</strong> ${coinDetails.symbol.toUpperCase()}</p>
            <p><strong>Description:</strong> ${coinDetails.description.en.substring(
              0,
              200
            )}...</p>
            <p><strong>Current Price (USD):</strong> $${coinDetails.market_data.current_price.usd.toFixed(
              2
            )}</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    modal.addEventListener("hidden.bs.modal", () => modal.remove());
  }

  function toggleReport(coinId) {
    if (selectedCoins.includes(coinId)) {
      selectedCoins = selectedCoins.filter((id) => id !== coinId);
    } else if (selectedCoins.length < 5) {
      selectedCoins.push(coinId);
    } else {
      alert("You can only add up to 5 coins to the report.");
      return;
    }

    localStorage.setItem("selectedCoins", JSON.stringify(selectedCoins));
    updateReportList();
    displayCoins(coins);
    fetchAndRenderGraph();
  }

  function updateReportList() {
    const reportList = document.getElementById("report-list");
    reportList.innerHTML = selectedCoins
      .map(
        (coin) =>
          `<p>${coin} <button class="btn btn-danger btn-sm" onclick="toggleReport('${coin}')">Remove</button></p>`
      )
      .join("");
  }

  async function fetchAndRenderGraph() {
    const graphContainer = document.getElementById("report-graph");
    graphContainer.innerHTML = "";

    if (selectedCoins.length === 0) {
      graphContainer.innerHTML =
        "<p>No coins selected. Add coins to view the graph.</p>";
      return;
    }

    try {
      const datasets = [];
      for (const coinId of selectedCoins) {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );

        if (!response.ok) throw new Error(`Failed to fetch data for ${coinId}`);

        const data = await response.json();

        if (!data.prices || !Array.isArray(data.prices)) {
          console.warn(`Invalid data format for ${coinId}`);
          continue;
        }

        const coinData = data.prices.map(([time, price]) => ({
          x: new Date(time),
          y: price,
        }));

        datasets.push({
          type: "line",
          showInLegend: true,
          name: coinId,
          dataPoints: coinData,
        });
      }

      if (datasets.length === 0) {
        graphContainer.innerHTML =
          "<p>No valid data available for the selected coins.</p>";
        return;
      }

      const chart = new CanvasJS.Chart("report-graph", {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Cryptocurrency Prices (Last 7 Days)",
        },
        axisX: {
          valueFormatString: "DD MMM",
        },
        axisY: {
          title: "Price (USD)",
          prefix: "$",
        },
        data: datasets,
      });

      chart.render();
    } catch (error) {
      console.error("Error fetching or rendering graph data:", error);
      graphContainer.innerHTML =
        "<p>Failed to load the graph. Please try again later.</p>";
    }
  }

  function showError(message, type = "error") {
    errorContainer.className = `alert ${
      type === "error" ? "alert-danger" : "alert-success"
    }`;
    errorContainer.textContent = message;
    setTimeout(() => {
      errorContainer.textContent = "";
      errorContainer.className = "";
    }, 5000);
  }

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query)
    );
    displayCoins(filteredCoins);
  });

  fetchCoins();
  updateReportList();
  fetchAndRenderGraph();

  window.fetchMoreInfo = fetchMoreInfo;
  window.toggleReport = toggleReport;
})();
