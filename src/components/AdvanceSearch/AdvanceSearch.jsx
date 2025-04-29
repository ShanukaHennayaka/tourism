import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const sriLankaLocations = [
    "Colombo", "Kandy", "Galle", "Negombo", "Unawatuna", "Mirissa", 
    "Bentota", "Arugam Bay", "Trincomalee", "Jaffna", "Nuwara Eliya",
    "Ella", "Sigiriya", "Polonnaruwa", "Anuradhapura", "Dambulla",
    "Yala National Park", "Udawalawe National Park", "Hikkaduwa",
    "Pasikuda", "Tangalle", "Kalpitiya", "Batticaloa", "Kitulgala"
  ];

  const filteredLocations = sriLankaLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGuestChange = (type, operation) => {
    if (type === 'adults') {
      setAdults(prev => operation === 'increase' ? prev + 1 : Math.max(1, prev - 1));
    } else {
      setChildren(prev => operation === 'increase' ? prev + 1 : Math.max(0, prev - 1));
    }
  };

  const getGuestSummary = () => {
    if (children === 0) return `${adults} ${adults === 1 ? 'Adult' : 'Adults'}`;
    return `${adults} ${adults === 1 ? 'Adult' : 'Adults'}, ${children} ${children === 1 ? 'Child' : 'Children'}`;
  };

  return (
    <section className="box-search-advance">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <div className="box-search shadow-sm">
              <div className="item-search">
                <CustomDropdown
                  label="Location"
                  onSelect={(value) => setSearchQuery(value)}
                  onSearch={setSearchQuery}
                  options={filteredLocations}
                  searchable
                />
              </div>
              
              <div className="item-search item-search-2">
                <label className="item-search-label">Check in</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  dateFormat="dd, MMMM, yyyy"
                />
              </div>
              
              <div className="item-search item-search-2">
                <label className="item-search-label">Check Out</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd, MMMM, yyyy"
                />
              </div>
              
              <div className="item-search bd-none guest-selector-container">
                <div 
                  className="guest-selector-trigger" 
                  onClick={() => setShowGuestSelector(!showGuestSelector)}
                >
                  <label className="item-search-label">Guests</label>
                  <div className="guest-summary">{getGuestSummary()}</div>
                </div>
                
                {showGuestSelector && (
                  <div className="guest-selector-popup">
                    <div className="guest-selector-item">
                      <div className="guest-type-info">
                        <span className="guest-type-label">Adults</span>
                      </div>
                      <div className="guest-counter">
                        <button 
                          className={`counter-btn ${adults <= 1 ? 'disabled' : ''}`}
                          onClick={() => handleGuestChange('adults', 'decrease')}
                          disabled={adults <= 1}
                        >
                          −
                        </button>
                        <span className="counter-value">{adults}</span>
                        <button 
                          className="counter-btn"
                          onClick={() => handleGuestChange('adults', 'increase')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="guest-selector-item">
                      <div className="guest-type-info">
                        <span className="guest-type-label">Children</span>
                      </div>
                      <div className="guest-counter">
                        <button 
                          className={`counter-btn ${children <= 0 ? 'disabled' : ''}`}
                          onClick={() => handleGuestChange('children', 'decrease')}
                          disabled={children <= 0}
                        >
                          −
                        </button>
                        <span className="counter-value">{children}</span>
                        <button 
                          className="counter-btn"
                          onClick={() => handleGuestChange('children', 'increase')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      className="guest-selector-close"
                      onClick={() => setShowGuestSelector(false)}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
              
              <div className="item-search bd-none">
                <Button className="primaryBtn flex-even d-flex justify-content-center">
                  <i className="bi bi-search me-2"></i> Search 
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdvanceSearch;