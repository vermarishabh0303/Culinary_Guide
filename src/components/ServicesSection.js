import React from 'react';

function ServicesSection() {
  return (
    <section className="flex justify-center bg-secondary py-12">
      <div className="px-4 md:px-8 max-w-[1600px] w-full">
        <h1 className="main-section-heading">What We Offer to Help Your Restaurant Thrive</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-8 gap-16">
          
          {/* Performance Management Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-800">Performance Management</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Customer Journey Management</h5>
                  <p className="card-text">Track customer touchpoints from discovery to dining. Improve experience and loyalty through data analysis.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Investments Optimization</h5>
                  <p className="card-text">Track ad performance and invest in what drives sales. Test discounts to find optimal value propositions.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Customer Offerings</h5>
                  <p className="card-text">Enhance food, drinks, service, and ambiance offerings. Create extras that improve the delivery experience.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Performance Analytics</h5>
                  <p className="card-text">Monitor key performance indicators and business metrics. Track growth and identify improvement opportunities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Excellence Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-800">Operational Excellence</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Kitchen Optimization</h5>
                  <p className="card-text">Streamline workflows and reduce waste effectively. Maximize efficiency in your kitchen operations.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Staff Training Programs</h5>
                  <p className="card-text">Comprehensive training solutions for your team. Elevate skills and improve service quality standards.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Quality Control Systems</h5>
                  <p className="card-text">Implement robust systems for consistency standards. Maintain excellence in every dish you serve.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Cost Management</h5>
                  <p className="card-text">Strategic approaches to optimize operational costs. Maintain quality while improving profitability margins.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Development Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-800">Menu Development</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Recipe Innovation</h5>
                  <p className="card-text">Create unique and profitable dishes for your brand. Develop recipes that delight customers consistently.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Menu Engineering</h5>
                  <p className="card-text">Strategic menu design for maximum profitability. Optimize customer satisfaction and revenue generation.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Seasonal Planning</h5>
                  <p className="card-text">Develop seasonal menus with fresh ingredients. Leverage current trends and seasonal availability.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Nutritional Analysis</h5>
                  <p className="card-text">Ensure menu items meet dietary requirements. Cater to health-conscious consumer demands effectively.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Strategy Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-800">Brand Strategy</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Brand Identity Development</h5>
                  <p className="card-text">Create compelling brand stories that resonate. Connect with your target audience effectively.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Digital Presence</h5>
                  <p className="card-text">Build strong online presence across platforms. Leverage social media and digital marketing channels.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Marketing Campaigns</h5>
                  <p className="card-text">Develop targeted marketing strategies effectively. Attract and retain customers through campaigns.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Community Engagement</h5>
                  <p className="card-text">Build strong local relationships and connections. Establish your restaurant as a community hub.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Planning Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-gray-800">Financial Planning</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Revenue Optimization</h5>
                  <p className="card-text">Identify opportunities to increase revenue streams. Implement strategic pricing and upselling techniques.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Budget Management</h5>
                  <p className="card-text">Create and maintain realistic business budgets. Support growth and profitability planning goals.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Cash Flow Analysis</h5>
                  <p className="card-text">Monitor and optimize cash flow patterns. Ensure business stability and sustainable growth.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Investment Strategy</h5>
                  <p className="card-text">Strategic guidance on equipment and expansion. </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Integration Section */}
          <div className="flex flex-col gap-4">
            {/* Heading Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-gray-800">Technology Integration</h3>
            </div>
            
            {/* Main Content Card */}
            <div className="animate-card flex flex-col p-6 bg-gray-100 gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[380px]">
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">POS Systems</h5>
                  <p className="card-text">Implement modern point-of-sale systems efficiently. Streamline operations and analytics tracking.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Online Ordering</h5>
                  <p className="card-text">Set up seamless online ordering systems. Expand your reach with delivery platforms.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Inventory Management</h5>
                  <p className="card-text">Digital solutions to track inventory effectively. Reduce waste and optimize purchasing decisions.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Customer Analytics</h5>
                  <p className="card-text">Advanced analytics to understand customer behavior. Optimize operations and improve business decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 