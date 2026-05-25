import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FinOpsSimulator.css";

const BASE_COSTS = {
  vms: 292, // 2x D4s v5 VMs
  sql: 380, // Gen 5 4-vCore Azure SQL DB
  blob: 100 // 5TB Hot Blob Storage
};

const FinOpsSimulator = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [toggles, setToggles] = useState({
    vmRI: false,
    vmAutoShutdown: false,
    sqlServerless: false,
    blobLifecycle: false
  });

  const handleToggle = (key) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate costs based on active optimizations
  const calculateCosts = () => {
    let vmCost = BASE_COSTS.vms;
    let sqlCost = BASE_COSTS.sql;
    let blobCost = BASE_COSTS.blob;

    // Apply VM Reserved Instance (40% off compute)
    if (toggles.vmRI) {
      vmCost = vmCost * 0.6;
    }

    // Apply Auto-shutdown (saves 30% of remaining compute)
    if (toggles.vmAutoShutdown) {
      vmCost = vmCost * 0.7;
    }

    // Apply SQL Database Serverless (saves 60%)
    if (toggles.sqlServerless) {
      sqlCost = sqlCost * 0.4;
    }

    // Apply Blob Storage Lifecycle Policy (saves 70%)
    if (toggles.blobLifecycle) {
      blobCost = blobCost * 0.3;
    }

    const baseline = BASE_COSTS.vms + BASE_COSTS.sql + BASE_COSTS.blob;
    const optimized = vmCost + sqlCost + blobCost;
    const savings = baseline - optimized;
    const pctSavings = (savings / baseline) * 100;

    return {
      baseline: Math.round(baseline),
      optimized: Math.round(optimized),
      savings: Math.round(savings),
      pctSavings: Math.round(pctSavings),
      vmSavings: Math.round(BASE_COSTS.vms - vmCost),
      sqlSavings: Math.round(BASE_COSTS.sql - sqlCost),
      blobSavings: Math.round(BASE_COSTS.blob - blobCost)
    };
  };

  const cost = calculateCosts();

  return (
    <div id="finops-simulator" className="py-5 finops-section">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">
        FINOPS COST SIMULATOR
      </h1>
      
      <div className="container" data-aos="fade-up">
        <p className="text-center text-white-50 max-width-para mx-auto mb-5">
          See how cloud cost governance works in practice. Below is a standard enterprise workloads template. 
          Toggle the FinOps strategies below to optimize the infrastructure and see real-time savings.
        </p>

        <div className="row g-4 align-items-stretch">
          {/* Workload Config & Toggles */}
          <div className="col-12 col-lg-7">
            <div className="finops-card height-100">
              <h3 className="card-title-neon mb-4">
                <i className="fas fa-sliders-h mr-2"></i> Optimization Controls
              </h3>
              
              <div className="workload-list">
                {/* Workload 1 */}
                <div className="workload-item">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-vm">
                        <i className="fas fa-server"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Compute Workloads</h5>
                        <small className="text-white-50">2x Azure D4s v5 VMs (Baseline: ${BASE_COSTS.vms}/mo)</small>
                      </div>
                    </div>
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center mb-2">
                      <input 
                        type="checkbox" 
                        checked={toggles.vmRI}
                        onChange={() => handleToggle("vmRI")} 
                      />
                      <span className="toggle-label text-white">
                        Apply 3-Year Reserved Instances <strong className="text-success">(Save 40%)</strong>
                      </span>
                    </label>
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.vmAutoShutdown}
                        onChange={() => handleToggle("vmAutoShutdown")} 
                      />
                      <span className="toggle-label text-white">
                        Configure Auto-Shutdown (12hr/day off-hours) <strong className="text-success">(Save 30%)</strong>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Workload 2 */}
                <div className="workload-item mt-4">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-db">
                        <i className="fas fa-database"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Database Tier</h5>
                        <small className="text-white-50">Azure SQL Database GP Gen 5 4-vCore (Baseline: ${BASE_COSTS.sql}/mo)</small>
                      </div>
                    </div>
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.sqlServerless}
                        onChange={() => handleToggle("sqlServerless")} 
                      />
                      <span className="toggle-label text-white">
                        Convert to Serverless auto-pause tier <strong className="text-success">(Save 60%)</strong>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Workload 3 */}
                <div className="workload-item mt-4">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-storage">
                        <i className="fas fa-hdd"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Storage Accounts</h5>
                        <small className="text-white-50">5 TB Blob Storage Hot Tier (Baseline: ${BASE_COSTS.blob}/mo)</small>
                      </div>
                    </div>
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.blobLifecycle}
                        onChange={() => handleToggle("blobLifecycle")} 
                      />
                      <span className="toggle-label text-white">
                        Configure Storage Lifecycle Archiving Policy <strong className="text-success">(Save 70%)</strong>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="col-12 col-lg-5">
            <div className="finops-card results-card height-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="card-title-neon mb-4">
                  <i className="fas fa-chart-pie mr-2"></i> FinOps Dashboard
                </h3>
                
                {/* Cost Comparison Bars */}
                <div className="cost-comparison mt-4">
                  <div className="cost-bar-wrapper mb-3">
                    <div className="d-flex justify-content-between text-white-50 mb-1">
                      <span>Baseline Cost</span>
                      <strong className="text-danger">${cost.baseline}/mo</strong>
                    </div>
                    <div className="cost-bar-track">
                      <div className="cost-bar fill-baseline" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="cost-bar-wrapper mb-4">
                    <div className="d-flex justify-content-between text-white-50 mb-1">
                      <span>Optimized Cost</span>
                      <strong className="text-success">${cost.optimized}/mo</strong>
                    </div>
                    <div className="cost-bar-track">
                      <div 
                        className="cost-bar fill-optimized" 
                        style={{ width: `${(cost.optimized / cost.baseline) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Big Savings Metric */}
                <div className="savings-display text-center my-4 py-3">
                  <h4 className="m-0 text-white-50">Monthly Savings</h4>
                  <div className="savings-amount">${cost.savings}</div>
                  <span className="savings-percentage">Saved {cost.pctSavings}%</span>
                </div>
              </div>

              {/* Informational Blurb */}
              <div className="finops-insight mt-3">
                <i className="fas fa-lightbulb insight-icon text-warning mr-2"></i>
                <span className="text-white-50">
                  {cost.pctSavings > 0 ? (
                    `By applying these rules, you reduced the infrastructure cost by ${cost.pctSavings}%. Francis integrates these exact automated practices into production pipelines to reduce operational waste.`
                  ) : (
                    "Select any optimization controls above to see the simulated savings."
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinOpsSimulator;
