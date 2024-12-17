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
    icon: { icon: "tabler-school" },
    to: "application-new",
    action: "create",
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
    icon: { icon: "tabler-clipboard-check" },
    to: "compliance-request",
    action: "read",
    subject: "compliance-request",
  },

  {
    title: "Application List",
    icon: { icon: "tabler-apps" },
    to: "application",
    action: "read",
    subject: "application",
  },

  {
    title: "University List",
    icon: { icon: "tabler-apps" },
    to: "university-list",
    action: "read",
    subject: "dashboard",
  },

  {
    title: "Course List",
    to: "course",
    icon: { icon: "tabler-command" },
    action: "read",
    subject: "course-request",
  },

  {
    title: "Branch List",
    icon: { icon: "tabler-apps" },
    to: "branch-list",
    action: "create",
    subject: "dashboard",
  },

  {
    title: "Course Request List",
    icon: { icon: "tabler-apps" },
    to: "course-request-list",
    action: "enable",
    subject: "course-request-list",
  },

  {
    title: "Course Request",
    to: "course-request",
    icon: { icon: "tabler-command" },
    action: "read",
    subject: "course-request",
  },

  {
    title: "Country List",
    to: "country-list",
    icon: { icon: "tabler-command" },
    action: "create",
    subject: "dashboard",
  },

  {
    title: "Student Record",
    icon: { icon: "tabler-files" },
    action: "read",
    subject: "dashboard",
    children: [
      {
        title: "Add Record",
        to: "student-record",
        action: "read",
        subject: "dashboard",
      },
      {
        title: "All Record",
        to: "student-record-all-record",
        action: "read",
        subject: "dashboard",
      },
    ],
  },

  {
    title: "Record",
    icon: { icon: "tabler-files" },
    action: "read",
    subject: "record",
    children: [
      {
        title: "All Record",
        to: "record",
        action: "read",
        subject: "record",
      },

      {
        title: "University",
        to: "record-university",
        action: "read",
        subject: "record",
      },

      {
        title: "Intake",
        to: "record-intake",
        action: "read",
        subject: "record",
      },
    ],
  },
  {
    title: "Leads",
    icon: { icon: "tabler-files" },
    action: "read",
    subject: "dashboard",
    children: [
      {
        title: "Lead Status",
        to: "lead-status",
        action: "read",
        subject: "dashboard",
      },
      {
        title: "All Leads",
        to: "lead",
        action: "read",
        subject: "dashboard",
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
        to: "task-add",
        action: "read",
        subject: "dashboard",
      },
      {
        title: "Task Schedule",
        to: "task",
        action: "read",
        subject: "dashboard",
      },
    ],
  },
  {
    title: "Notices",
    icon: { icon: "tabler-help-triangle" },
    to: "notices",
    action: "create",
    subject: "dashboard",
  },
  {
    title: "Roles & Permission",
    icon: { icon: "tabler-command" },
    action: "create",
    subject: "dashboard",
    children: [
      {
        title: "Roles",
        to: "roles",
        action: "create",
        subject: "dashboard",
      },

      {
        title: "Permissions",
        to: "permissions",
        action: "create",
        subject: "dashboard",
      },
    ],
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
];
