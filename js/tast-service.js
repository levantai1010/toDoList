function TodoService() {
    this.getListTask = function () {
        return axios({
            url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo",
            method: "GET"
        })
    },
        this.addTask = function (a) {
            return axios({
                url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo",
                method: "POST",
                data: a
            })
        },
        this.deleteTask = function (a) {
            return axios({
                url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${a}`,
                method: "DELETE"
            })
        },
        this.getTaskById = function (a) {
            return axios({
                url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${a}`,
                method: "GET"
            })
        },
        this.updateTask = function (a) {
            return axios({
                url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${a.id}`,
                method: "PUT",
                data: a
            })
        }
}