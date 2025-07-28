import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Table, Users, Package, ShoppingCart, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Dynamic Table Component</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive, fully customizable table component with advanced features for modern web applications.
        </p>
        <Link href="/examples">
          <Button size="lg" className="mt-4">
            View Examples
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Employee Management
            </CardTitle>
            <CardDescription>
              HR system with employee profiles, performance tracking, and role management.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Avatar integration</li>
              <li>• Performance indicators</li>
              <li>• Role-based filtering</li>
              <li>• Comprehensive forms</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Product Catalog
            </CardTitle>
            <CardDescription>E-commerce product management with inventory and pricing controls.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Stock level indicators</li>
              <li>• Rating displays</li>
              <li>• Category filtering</li>
              <li>• Price management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Order Management
            </CardTitle>
            <CardDescription>Complete order processing with status tracking and delivery coordination.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Status workflows</li>
              <li>• Priority indicators</li>
              <li>• Tracking integration</li>
              <li>• Payment management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Customer Database
            </CardTitle>
            <CardDescription>CRM system with customer profiles and purchase history tracking.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Customer segmentation</li>
              <li>• Spending analytics</li>
              <li>• Contact management</li>
              <li>• Purchase history</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Project Portfolio
            </CardTitle>
            <CardDescription>Project tracking with budget monitoring and progress visualization.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Progress tracking</li>
              <li>• Budget monitoring</li>
              <li>• Timeline management</li>
              <li>• Team coordination</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="w-5 h-5" />
              All Features
            </CardTitle>
            <CardDescription>Comprehensive feature set for any data management scenario.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• 15+ field types</li>
              <li>• Advanced filtering</li>
              <li>• Bulk operations</li>
              <li>• Export functionality</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
