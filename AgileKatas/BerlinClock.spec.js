import BerlinClock, {
  BerlinClockMinutes,
  BerlinClock5Minutes,
  BerlinClockHours,
  BerlinClock5Hours,
  BerlinClockSeconds,
  ConvertBerlinClock,
} from './BerlinClock'

describe('Berlin Clock', () => {
  describe('single minutes row', () => {
    it('00:00:00', () => {
      expect(BerlinClockMinutes('00:00:00')).toBe('OOOO')
    })
    it('23:59:59', () => {
      expect(BerlinClockMinutes('23:59:59')).toBe('YYYY')
    })
    it('12:32:00', () => {
      expect(BerlinClockMinutes('12:32:00')).toBe('YYOO')
    })
    it('12:34:00', () => {
      expect(BerlinClockMinutes('12:34:00')).toBe('YYYY')
    })
    it('12:35:00', () => {
      expect(BerlinClockMinutes('12:35:00')).toBe('OOOO')
    })
  })
  describe('5 minutes row', () => {
    it('00:00:00', () => {
      expect(BerlinClock5Minutes('00:00:00')).toBe('OOOOOOOOOOO')
    })
    it('23:59:59', () => {
      expect(BerlinClock5Minutes('23:59:59')).toBe('YYRYYRYYRYY')
    })
    it('12:04:00', () => {
      expect(BerlinClock5Minutes('12:04:00')).toBe('OOOOOOOOOOO')
    })
    it('12:23:00', () => {
      expect(BerlinClock5Minutes('12:23:00')).toBe('YYRYOOOOOOO')
    })
    it('12:35:00', () => {
      expect(BerlinClock5Minutes('12:35:00')).toBe('YYRYYRYOOOO')
    })
  })
  describe('single hours row', () => {
    it('00:00:00', () => {
      expect(BerlinClockHours('00:00:00')).toBe('OOOO')
    })
    it('23:59:59', () => {
      expect(BerlinClockHours('23:59:59')).toBe('RRRO')
    })
    it('02:04:00', () => {
      expect(BerlinClockHours('02:04:00')).toBe('RROO')
    })
    it('08:23:00', () => {
      expect(BerlinClockHours('08:23:00')).toBe('RRRO')
    })
    it('14:35:00', () => {
      expect(BerlinClockHours('14:35:00')).toBe('RRRR')
    })
  })
  describe('5 hours row', () => {
    it('00:00:00', () => {
      expect(BerlinClock5Hours('00:00:00')).toBe('OOOO')
    })
    it('23:59:59', () => {
      expect(BerlinClock5Hours('23:59:59')).toBe('RRRR')
    })
    it('02:04:00', () => {
      expect(BerlinClock5Hours('02:04:00')).toBe('OOOO')
    })
    it('08:23:00', () => {
      expect(BerlinClock5Hours('08:23:00')).toBe('ROOO')
    })
    it('16:35:00', () => {
      expect(BerlinClock5Hours('16:35:00')).toBe('RRRO')
    })
  })
  describe('single seconds row', () => {
    it('00:00:00', () => {
      expect(BerlinClockSeconds('00:00:00')).toBe('Y')
    })
    it('23:59:59', () => {
      expect(BerlinClockSeconds('23:59:59')).toBe('O')
    })
  })
  describe('full berlin clock', () => {
    it('00:00:00', () => {
      expect(BerlinClock('00:00:00')).toBe('YOOOOOOOOOOOOOOOOOOOOOOO')
    })
    it('23:59:59', () => {
      expect(BerlinClock('23:59:59')).toBe('ORRRRRRROYYRYYRYYRYYYYYY')
    })
    it('23:59:57', () => {
      expect(BerlinClock('23:59:57')).toBe('ORRRRRRROYYRYYRYYRYYYYYY')
    })
    it('16:50:06', () => {
      expect(BerlinClock('16:50:06')).toBe('YRRROROOOYYRYYRYYRYOOOOO')
    })
    it('11:37:01', () => {
      expect(BerlinClock('11:37:01')).toBe('ORROOROOOYYRYYRYOOOOYYOO')
    })
  })
  describe('convert berlin clock', () => {
    it('00:00:00', () => {
      expect(ConvertBerlinClock('YOOOOOOOOOOOOOOOOOOOOOOO')).toBe('00:00:00')
    })
    it('23:59:59', () => {
      expect(ConvertBerlinClock('ORRRRRRROYYRYYRYYRYYYYYY')).toBe('23:59:59')
    })
    it('16:50:00', () => {
      expect(ConvertBerlinClock('YRRROROOOYYRYYRYYRYOOOOO')).toBe('16:50:00')
    })
    it('11:37:59', () => {
      expect(ConvertBerlinClock('ORROOROOOYYRYYRYOOOOYYOO')).toBe('11:37:59')
    })
  })
})
