
class UserService {
  async getUsers() {
    try {
      const users = await (await fetch("https://forinterview.onrender.com/people/")).json();
      return users;
    } catch (_err) {
      console.error(_err);
      throw Error("failed to fetch all the users");
    }
  }
  async getUser(id:string) {
    try {
      const users = await (await fetch("https://forinterview.onrender.com/people/"+id)).json();
      return users;
    } catch (_err) {
      console.error(_err);
      throw Error("failed to fetch all the user");
    }
  }
}
const userService = new UserService()
export default userService 