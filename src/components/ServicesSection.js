import React from 'react';

function ServicesSection() {
  return (
    <section className="flex justify-center bg-secondary py-12">
      <div className="px-6 md:px-0 max-w-[1400px]">
        <h1 className="main-section-heading">What We Offer to Help Your Restaurant Thrive</h1>
        <div className="grid grid-cols-3 px-4 py-8 gap-4">
          
          {/* card one */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Performance Management</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Customer Journey Management</h5>
                  <p className="card-text">Track customer touchpoints, from discovery to dining, to improve experience and loyalty.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Investments Optimization</h5>
                  <p className="card-text">Track ad performance, invest more in what drives sales, test discounts to find optimal value.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Customer Offerings</h5>
                  <p className="card-text">Customer offerings include food, drinks, service, ambiance, and any extras that enhance the delivery experience.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Review Analysis</h5>
                  <p className="card-text">Review analysis helps restaurants understand customer feedback to improve service, food, and overall experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card two */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Operational Excellence</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Kitchen Optimization</h5>
                  <p className="card-text">Streamline workflows, reduce waste, and maximize efficiency in your kitchen operations.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Staff Training Programs</h5>
                  <p className="card-text">Comprehensive training solutions to elevate your team's skills and service quality.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Quality Control Systems</h5>
                  <p className="card-text">Implement robust systems to maintain consistency and excellence in every dish.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Cost Management</h5>
                  <p className="card-text">Strategic approaches to optimize costs while maintaining quality and profitability.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card three */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Menu Development</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Recipe Innovation</h5>
                  <p className="card-text">Create unique, profitable dishes that reflect your brand and delight customers.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Menu Engineering</h5>
                  <p className="card-text">Strategic menu design to maximize profitability and customer satisfaction.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Seasonal Planning</h5>
                  <p className="card-text">Develop seasonal menus that leverage fresh ingredients and current trends.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Nutritional Analysis</h5>
                  <p className="card-text">Ensure menu items meet dietary requirements and health-conscious consumer demands.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card four */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Brand Strategy</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Brand Identity Development</h5>
                  <p className="card-text">Create a compelling brand story that resonates with your target audience.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Digital Presence</h5>
                  <p className="card-text">Build a strong online presence across social media and digital platforms.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Marketing Campaigns</h5>
                  <p className="card-text">Develop targeted marketing strategies to attract and retain customers effectively.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Community Engagement</h5>
                  <p className="card-text">Build strong local relationships and establish your restaurant as a community hub.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card five */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Financial Planning</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">Revenue Optimization</h5>
                  <p className="card-text">Identify opportunities to increase revenue through strategic pricing and upselling.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Budget Management</h5>
                  <p className="card-text">Create and maintain realistic budgets that support growth and profitability.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Cash Flow Analysis</h5>
                  <p className="card-text">Monitor and optimize cash flow to ensure business stability and growth.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Investment Strategy</h5>
                  <p className="card-text">Strategic guidance on equipment upgrades, expansion, and technology investments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card six */}
          <div className="animate-card flex flex-col p-6 bg-white gap-6 justify-between drop-shadow-md hover:drop-shadow-xl hover:scale-105 ease-linear transition-all rounded-lg min-h-[350px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="card-main-heading animate-fade-in">Technology Integration</h3>
              </div>
              
              <div className="flex flex-col gap-4 text-base text-gray-700">
                <div className="animate-slide-up card-point" style={{animationDelay: '0.1s'}}>
                  <h5 className="card-subheading">POS Systems</h5>
                  <p className="card-text">Implement modern point-of-sale systems to streamline operations and analytics.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.2s'}}>
                  <h5 className="card-subheading">Online Ordering</h5>
                  <p className="card-text">Set up seamless online ordering and delivery systems to expand your reach.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.3s'}}>
                  <h5 className="card-subheading">Inventory Management</h5>
                  <p className="card-text">Digital solutions to track inventory, reduce waste, and optimize purchasing.</p>
                </div>
                
                <div className="animate-slide-up card-point" style={{animationDelay: '0.4s'}}>
                  <h5 className="card-subheading">Customer Analytics</h5>
                  <p className="card-text">Advanced analytics to understand customer behavior and optimize operations.</p>
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