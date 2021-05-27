const usersList = document.querySelector("#users-list");
const restaurantsList = document.querySelector("#restaurants-list");
const reservationsList = document.querySelector("#reservations-list");

restaurantsList.addEventListener("click", async (ev) => {
  if (ev.target.tagName === "LI") {
    const restaurantId = ev.target.getAttribute("data-id");
    const userId = window.location.hash.slice(1);
    await fetch(`/api/users/${userId}/reservations`, {
      body: JSON.stringify({ restaurantId }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadReservations();
  }
});

let users;

const renderUsers = () => {
  const userId = window.location.hash.slice(1);
  const html = users
    .map((user) => {
      return `
          <li class='${userId === user.id ? "selected" : ""}'>
            <a href='#${user.id}'>
            ${user.name}
            </a>
          </li>
        `;
    })
    .join("");
  usersList.innerHTML = html;
};

const loadUsers = async () => {
  const response = await fetch("/api/users");
  users = await response.json();
  renderUsers();
};

const loadRestaurants = async () => {
  const response = await fetch("/api/restaurants");
  const data = await response.json();
  const html = data
    .map((restaurant) => {
      return `
        <li data-id='${restaurant.id}'>
          ${restaurant.name}
        </li>
      `;
    })
    .join("");
  restaurantsList.innerHTML = html;
};

const loadReservations = async () => {
  const userId = window.location.hash.slice(1);
  const response = await fetch(`/api/users/${userId}/reservations`);
  const reservations = await response.json();
  const html = reservations
    .map((reservation) => {
      return `
        <li>
          ${reservation.restaurant.name}
        </li>
      `;
    })
    .join("");
  reservationsList.innerHTML = html;
};

loadUsers();
loadRestaurants();
loadReservations();

window.addEventListener("hashchange", () => {
  renderUsers();
  loadReservations();
});
