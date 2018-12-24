require 'rails_helper'

RSpec.describe Checkin, type: :model do
  context 'validation tests' do 
  	it 'Type' do
  		checkin = Checkin.new(longitude: '123.45', latitude: '123.45', created_at:"mm/dd/yyy UTC").save
  		expect(checkin).to eq(false)
  	end
  	
  	it 'Longitude' do
  		checkin = Checkin.new(longitude: '123.45', typeCheckin: 'example', created_at:"mm/dd/yyy UTC").save
  		expect(checkin).to eq(false)
  	end  	

  	it 'Latitude' do
  		checkin = Checkin.new(typeCheckin: 'example', latitude: '123.45', created_at:"mm/dd/yyy UTC").save
  		expect(checkin).to eq(false)
  	end  	

  	it 'Created at' do
  		checkin = Checkin.new(longitude: '123.45', latitude: '123.45', typeCheckin:"example").save
  		expect(checkin).to eq(false)
  	end  

  end
end