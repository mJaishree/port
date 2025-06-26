export const getStatusBadge = (status: string) => {
  const statusConfig = {
    live: { label: "Live", shortLabel: "Live", color: "bg-green-500", icon: "🟢" },
    "in-progress": {
      label: "In Progress",
      shortLabel: "Progress",
      color: "bg-yellow-500",
      icon: "🚧",
    },
    confidential: { 
      label: "Confidential", 
      shortLabel: "Private", 
      color: "bg-red-500", 
      icon: "🔒" 
    },
    completed: { 
      label: "Completed", 
      shortLabel: "Completed", 
      color: "bg-blue-500", 
      icon: "✅" 
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white ${config.color} whitespace-nowrap`}
    >
      <span className="text-xs">{config.icon}</span>
      <span className="hidden xs:inline text-xs">{config.label}</span>
      <span className="xs:hidden text-xs">{config.shortLabel}</span>
    </span>
  );
};
