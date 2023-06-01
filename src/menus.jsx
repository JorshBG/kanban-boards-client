const menus = [

    {
        title: "View boards",
        path: "view",
        privilege: "user"
    },
    {
        title: "Join to boards",
        path: "join",
        privilege: "user"
    },
    {
        title: "Dashboard",
        path: "view",
        privilege: "admin"
    },
    {
        parent: "Management",
        title: "Users",
        path: "users",
        privilege: "admin"
    },
    {
        parent: "Management",
        title: "Boards",
        path: "boards",
        privilege: "admin"
    },
    // {
    //     parent: "Management",
    //     title: "Activities",
    //     path: "activities",
    //     privilege: "admin"
    // },
]

export default menus;