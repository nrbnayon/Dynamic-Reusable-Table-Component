"use client"

import { useState } from "react"
import { DynamicTable } from "./components/common/DynamicTable"
import type {
  GenericDataItem,
  ColumnConfig,
  FormFieldConfig,
  FilterConfig,
  ActionConfig,
  TableConfig,
  EditModalConfig,
} from "./types/dynamicTableTypes"
import { Eye, Edit } from "lucide-react"

// Sample data
const sampleData: GenericDataItem[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    email: "john@example.com",
    role: "admin",
    status: "active",
    salary: 75000,
    department: "Engineering",
    joinDate: "2023-01-15",
    skills: ["React", "TypeScript", "Node.js"],
    isActive: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    email: "jane@example.com",
    role: "user",
    status: "inactive",
    salary: 65000,
    department: "Design",
    joinDate: "2023-03-20",
    skills: ["Figma", "Photoshop"],
    isActive: false,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    status: "active",
    salary: 80000,
    department: "Engineering",
    joinDate: "2022-11-10",
    skills: ["Python", "Django", "PostgreSQL"],
    isActive: true,
  },
]

// Column configuration
const columns: ColumnConfig[] = [
  {
    key: "name",
    label: "Name",
    sortable: true,
    searchable: true,
    showAvatar: true, // Enable avatar display
    width: "200px",
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
    searchable: true,
    type: "email",
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    sortable: true,
    options: [
      { value: "admin", label: "Admin", color: "#ef4444" },
      { value: "user", label: "User", color: "#3b82f6" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    sortable: true,
    options: [
      { value: "active", label: "Active", color: "#10b981" },
      { value: "inactive", label: "Inactive", color: "#f59e0b" },
    ],
  },
  {
    key: "salary",
    label: "Salary",
    type: "currency",
    sortable: true,
    align: "right",
  },
  {
    key: "department",
    label: "Department",
    sortable: true,
    searchable: true,
  },
  {
    key: "joinDate",
    label: "Join Date",
    type: "date",
    sortable: true,
  },
  {
    key: "skills",
    label: "Skills",
    type: "multiselect",
    render: (value) => {
      if (!Array.isArray(value)) return "-"
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
              {skill}
            </span>
          ))}
        </div>
      )
    },
  },
  {
    key: "isActive",
    label: "Active",
    type: "checkbox",
    align: "center",
  },
]

// Form field configuration
const formFields: FormFieldConfig[] = [
  {
    key: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Enter full name",
    section: "personal",
    gridCol: "half",
  },
  {
    key: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "Enter email address",
    section: "personal",
    gridCol: "half",
    validation: {
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    },
  },
  {
    key: "avatar",
    label: "Profile Picture",
    type: "file",
    placeholder: "Upload profile picture",
    section: "personal",
    gridCol: "full",
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    required: true,
    section: "work",
    gridCol: "half",
    options: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    required: true,
    section: "work",
    gridCol: "half",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  },
  {
    key: "salary",
    label: "Salary",
    type: "currency",
    required: true,
    section: "work",
    gridCol: "half",
    validation: {
      min: 0,
      max: 1000000,
    },
  },
  {
    key: "department",
    label: "Department",
    type: "select",
    required: true,
    section: "work",
    gridCol: "half",
    options: [
      { value: "Engineering", label: "Engineering" },
      { value: "Design", label: "Design" },
      { value: "Marketing", label: "Marketing" },
      { value: "Sales", label: "Sales" },
    ],
  },
  {
    key: "joinDate",
    label: "Join Date",
    type: "date",
    required: true,
    section: "work",
    gridCol: "half",
  },
  {
    key: "skills",
    label: "Skills",
    type: "multiselect",
    section: "work",
    gridCol: "full",
    options: [
      { value: "React", label: "React" },
      { value: "TypeScript", label: "TypeScript" },
      { value: "Node.js", label: "Node.js" },
      { value: "Python", label: "Python" },
      { value: "Django", label: "Django" },
      { value: "PostgreSQL", label: "PostgreSQL" },
      { value: "Figma", label: "Figma" },
      { value: "Photoshop", label: "Photoshop" },
    ],
  },
  {
    key: "isActive",
    label: "Active Status",
    type: "checkbox",
    section: "work",
    gridCol: "full",
  },
]

// Filter configuration
const filters: FilterConfig[] = [
  {
    key: "role",
    label: "Role",
    type: "select",
    options: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  },
  {
    key: "department",
    label: "Department",
    type: "select",
    options: [
      { value: "Engineering", label: "Engineering" },
      { value: "Design", label: "Design" },
      { value: "Marketing", label: "Marketing" },
      { value: "Sales", label: "Sales" },
    ],
  },
  {
    key: "joinDate",
    label: "Join Date",
    type: "date",
  },
]

// Action configuration - Remove duplicate edit/delete actions
const actions: ActionConfig[] = [
  {
    key: "view",
    label: "View",
    icon: <Eye className="w-4 h-4" />,
    variant: "ghost",
    onClick: (item) => {
      // This will be handled by the table's handleView function
      console.log("View action triggered for:", item.name)
    },
  },
  {
    key: "edit",
    label: "Edit",
    icon: <Edit className="w-4 h-4" />,
    variant: "ghost",
    onClick: (item) => {
      // This will trigger the edit modal since we have formFields
      console.log("Custom edit action for:", item.name)
    },
  },
  // Remove the delete action since we want to use the default delete functionality
]

// Table configuration
const tableConfig: TableConfig = {
  title: "Employee Management",
  description: "Manage your team members and their information",
  searchPlaceholder: "Search employees...",
  itemsPerPage: 10,
  enableSearch: true,
  enableFilters: true,
  enablePagination: true,
  enableSelection: true, // Make sure this is enabled
  enableSorting: true,
  striped: true,
  emptyMessage: "No employees found",
  loadingMessage: "Loading employees...",
}

// Edit modal configuration
const editModalConfig: EditModalConfig = {
  title: "Edit Employee",
  description: "Update employee information below",
  width: "xl",
  sections: [
    {
      key: "personal",
      title: "Personal Information",
      description: "Basic personal details",
    },
    {
      key: "work",
      title: "Work Information",
      description: "Job-related details and settings",
    },
  ],
}

export default function ExampleUsage() {
  const [data, setData] = useState<GenericDataItem[]>(sampleData)
  const [isLoading, setIsLoading] = useState(false)

  const handleDataChange = (newData: GenericDataItem[]) => {
    setData(newData)
    console.log("Data changed:", newData)
  }

  const handleItemEdit = (item: GenericDataItem) => {
    console.log("Item edited:", item)
  }

  const handleItemDelete = (itemId: string) => {
    console.log("Item deleted:", itemId)
  }

  const handleItemsSelect = (selectedIds: string[]) => {
    console.log("Items selected:", selectedIds)
  }

  const handleExport = (exportData: GenericDataItem[]) => {
    console.log("Exporting data:", exportData)

    // Convert data to CSV format
    const headers = columns.map((col) => col.label).join(",")
    const csvData = exportData
      .map((item) =>
        columns
          .map((col) => {
            const value = item[col.key]
            if (Array.isArray(value)) return `"${value.join("; ")}"`
            if (typeof value === "string" && value.includes(",")) return `"${value}"`
            return value || ""
          })
          .join(","),
      )
      .join("\n")

    const csv = `${headers}\n${csvData}`

    // Create and download file
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `employees-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Data refreshed")
    }, 1000)
  }

  return (
    <div className="container mx-auto p-6">
      <DynamicTable
        data={data}
        columns={columns}
        formFields={formFields}
        filters={filters}
        actions={actions}
        tableConfig={tableConfig}
        editModalConfig={editModalConfig}
        onDataChange={handleDataChange}
        onItemEdit={handleItemEdit}
        onItemDelete={handleItemDelete}
        onItemsSelect={handleItemsSelect}
        onExport={handleExport}
        onRefresh={handleRefresh}
        isLoading={isLoading}
      />
    </div>
  )
}
