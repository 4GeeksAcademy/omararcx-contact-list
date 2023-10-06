const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			mainUrl: "https://playground.4geeks.com/apis/fake/contact/agenda/omararcx",
			putURL: "https://playground.4geeks.com/apis/fake/contact"


		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: async () => {
				let store = getStore()

				try {
					let response = await fetch(store.mainUrl)
					let data = await response.json()
					setStore({ contacts: data })

				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.putURL}/${id}`, {
						headers: { "Content-Type": "application/json" },
						method: "DELETE"
					})
					if (response.ok) {
						getActions().getContacts();
					}
				} catch (error) {
					console.log(error)
				}

			},

			saveContact: async (data) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.putURL}`,
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(data)
						}
					)
					if (response.ok) {
						getActions().getContacts()
					}
				}
				catch (error) {
					console.log(error)
				}


			},
			changeContact: async (contact) => {
				let store = getStore()
				let actions = getActions()

				try {
					let response = await fetch(`${store.putURL}/${contact.id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						}
					)
					if (response.ok) {
						actions.getContacts()
					}
				}
				catch (error) {
					console.log(error)
				}
			},
			provideId: (id) => {
				console.log(id)
			}
		}
	};
};

export default getState;
