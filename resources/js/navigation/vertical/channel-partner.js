export default [
  {
    title: "Dashboard",
    icon: { icon: "tabler-smart-home" },
    to: "dashboard",
    action: "read",
    subject: "dashboard",
  },

  {
    title: "New Application",
    icon: { icon: "tabler-file-plus" },
    to: "application-new",
    action: "create",
    subject: "application",
  },



  {
    title: "Application List",
    icon: { icon: "tabler-list" },
    to: "application",
    action: "read",
    subject: "application",
  },
  {
    title: "Application Request",
    icon: { icon: "tabler-clipboard-check" },
    to: "application-request",
    action: "read",
    subject: "application-request",
  },

  {
    title: "Compliance Request",
    icon: { icon: "tabler-shield-check" },
    to: "compliance-request",
    action: "read",
    subject: "compliance-request",
  },

  {
    title: "University List",
    icon: { icon: "tabler-school" },
    to: "university-list",
    action: "read",
    subject: "dashboard",
  },

  {
    title: "Course List",
    icon: { icon: "tabler-book" },
    to: "course",
    action: "read",
    subject: "course-request",
  },


  {
    title: "Course Request List",
    icon: { icon: "tabler-clipboard-list" },
    to: "course-request-list",
    action: "enable",
    subject: "course-request-list",
  },

  {
    title: "Course Request",
    icon: { icon: "tabler-file-text" },
    to: "course-request",
    action: "read",
    subject: "course-request",
  },



  {
    title: "Student Record",
    icon: { icon: "tabler-id" },
    action: "read",
    subject: "student",
    children: [
      {
        title: "Add Record",
        icon: { icon: "tabler-file-plus" },
        to: "student-record",
        action: "create",
        subject: "student",
      },
      {
        title: "All Record",
        icon: { icon: "tabler-archive" },
        to: "student-record-all-record",
        action: "read",
        subject: "student",
      },
    ],
  },

  {
    title: "Data Entry",
    icon: { icon: "tabler-keyboard" },
    action: "read",
    subject: "record",
    children: [
      {
        title: "All Record",
        icon: { icon: "tabler-archive" },
        to: "record",
        action: "read",
        subject: "record",
      },

      {
        title: "University",
        icon: { icon: "tabler-building-university" },
        to: "record-university",
        action: "read",
        subject: "record",
      },

      {
        title: "Intake",
        icon: { icon: "tabler-calendar" },
        to: "record-intake",
        action: "read",
        subject: "record",
      },
    ],
  },
  {
    title: "Leads",
    icon: { icon: "tabler-briefcase" },
    action: "read",
    subject: "lead",
    children: [
      {
        title: "Lead Status",
        icon: { icon: "tabler-chart-line" },
        to: "lead-status",
        action: "create",
        subject: "lead",
      },
      {
        title: "All Leads",
        icon: { icon: "tabler-users" },
        to: "lead",
        action: "read",
        subject: "lead",
      },
      {
        title: "Lead Assigned Operation",
        icon: { icon: "tabler-user-check" },
        to: "lead-assigned-operation",
        action: "create",
        subject: "lead",
      },

      // {
      //   title: 'Unassigned Lead',
      //   to: 'record-intake',
      //   action: 'read',
      //   subject: 'record',

      // },
      // {
      //   title: 'Future Intake',
      //   to: 'record-intake',
      //   action: 'read',
      //   subject: 'record',

      // },
      // {
      //   title: 'Dead Lead',
      //   to: 'record-intake',
      //   action: 'read',
      //   subject: 'record',

      // },
    ],
  },
  {
    title: "Applications",
    icon: { icon: "tabler-files" },
    action: "read",
    subject: "dashboard",
    children: [
      {
        title: "Application Status",
        to: "applications-status",
        action: "read",
        subject: "dashboard",
      },
      {
        title: "All Applications",
        to: "applications",
        action: "read",
        subject: "dashboard",
      },
    ]
  },
  {
    title: "Daily Task",
    icon: { icon: "tabler-clipboard-copy" },
    action: "read",
    subject: "dashboard",
    children: [
      {
        title: "Add New",
        icon: { icon: "tabler-plus" },
        to: "task-add",
        action: "read",
        subject: "dashboard",
      },
      {
        title: "Task Schedule",
        icon: { icon: "tabler-calendar" },
        to: "task",
        action: "read",
        subject: "dashboard",
      },
    ],
  },
  {
    title: "Notices",
    icon: { icon: "tabler-bell" },
    to: "notices",
    action: "create",
    subject: "dashboard",
  },

  {
    title: "User",
    icon: { icon: "tabler-user" },
    to: "user",
    action: "read",
    subject: "user",
  },

  {
    title: "Email",
    icon: { icon: "tabler-mail" },
    to: "email",
    action: "read",
    subject: "email",
  },
  {
    title: "Roles & Permission",
    icon: { icon: "tabler-lock" },
    action: "create",
    subject: "dashboard",
    children: [
      {
        title: "Roles",
        icon: { icon: "tabler-user-shield" },
        to: "roles",
        action: "create",
        subject: "dashboard",
      },

      {
        title: "Permissions",
        icon: { icon: "tabler-key" },
        to: "permissions",
        action: "create",
        subject: "dashboard",
      },
    ],
  },

  {
    title: "Settings",
    icon: { icon: "tabler-settings" },
    action: "create",
    subject: "dashboard",
    children: [
      {
        title: "Branch List",
        icon: { icon: "tabler-tree" },
        to: "branch-list",
        action: "create",
        subject: "dashboard",
      },


      {
        title: "Country List",
        icon: { icon: "tabler-globe" },
        to: "country-list",
        action: "create",
        subject: "dashboard",
      },
    ],
  },
];
